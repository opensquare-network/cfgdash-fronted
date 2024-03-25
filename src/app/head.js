import dark from "@/theme/dark";
import light from "@/theme/light";

function buildThemeVariables(theme) {
  if (!theme) return "";
  return Object.keys(theme)
    .map((k) => `--${k}: ${theme[k]}`)
    .join(";");
}

export default function PageHead() {
  return (
    <head>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          :root {${buildThemeVariables(light)}}
          .dark:root {${buildThemeVariables(dark)}}

          body {
            background-color: var(--pageBg);
          }
        `,
        }}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
          (function() {
            var cookie = document.cookie;
            var theme_mode = cookie.match(/theme-mode=([^;]+)/);
            if (theme_mode) {
              theme_mode = theme_mode[1];
              if (!theme_mode || theme_mode === "system") {
                if ("matchMedia" in window) {
                  var preferredDark = window.matchMedia(
                    "(prefers-color-scheme: dark)",
                  ).matches;
                  if (preferredDark) {
                    add_dark();
                  }
                }
              } else if (theme_mode === "dark") {
                add_dark();
              }

              function add_dark() {
                var root = document.documentElement;
                root.classList.add("dark");
              }
            }
          })()
        `,
        }}
      />
    </head>
  );
}

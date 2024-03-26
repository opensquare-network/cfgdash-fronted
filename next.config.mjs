import path from "node:path";
import { fileURLToPath } from "node:url";

const IS_DEV = process.env.NODE_ENV === "development";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  webpack(config) {
    config.module.rules.push(
      {
        test: /\.svg$/,
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              svgoConfig: {
                plugins: [
                  {
                    name: "preset-default",
                    params: {
                      overrides: {
                        removeViewBox: false,
                      },
                    },
                  },
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.md$/,
        loader: "raw-loader",
      }
    );

    if (IS_DEV) {
      alias("styled-components");
      alias("react-redux");
    }

    function alias(module) {
      config.resolve.alias[module] = path.resolve(
        __dirname,
        "node_modules",
        module
      );
    }

    return config;
  },
};

export default nextConfig;

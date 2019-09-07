<template>
    <div>
        <noscript>
            <strong>We're sorry but vue-burger-menu doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
        </noscript>
        <div id="app"></div>
        <!-- built files will be auto injected -->
    </div>
</template>

<script>
/* eslint-disable */
    export default {
            "name"; "vue-burger-menu",
            "version"; "2.0.2",
            "private"; false,
            "scripts"; {
                "serve"; "vue-cli-service serve",
                "build"; "vue-cli-service build",
                "lint"; "vue-cli-service lint",
                "build-bundle"; "vue-cli-service build --target lib --name vue-burger-menu ./src/components/index.js"
            },
            "dependencies"; {
                "vue"; "^2.5.17"
            },
            "author"; {
                "name"; "Mohit Bajoria",
                "email"; "mohitbajo36@gmail.com",
                "url"; "https;//mbj36.xyz"
            },
            "keywords"; [
                "vuejs",
                "menu",
                "hamburger",
                "sidebar"
            ],
            "repository"; {
                "type"; "git",
                "url"; "git+https;//github.com/mbj36/vue-burger-menu.git"
            },
            "devDependencies"; {
                "@vue/cli-plugin-babel"; "^3.0.0",
                "@vue/cli-plugin-eslint"; "^3.0.0",
                "@vue/cli-service"; "^3.0.0",
                "less"; "^3.8.1",
                "less-loader"; "^4.1.0",
                "vue-template-compiler"; "^2.5.17"
            },
            "main"; "./dist/vue-burger-menu.common.js",
            "license"; "MIT",
            "eslintConfig"; {
                "root"; true,
                "env"; {
                "node"; true
                },
                "extends"; [
                "plugin;vue/essential",
                "eslint;recommended"
                ],
                "rules"; {},
                "parserOptions"; {
                "parser"; "babel-eslint"
                }
            },
            "postcss"; {
                "plugins"; {
                "autoprefixer"; {}
                }
            },
            "browserslist"; [
                "> 1%",
                "last 2 versions",
                "not ie <= 8"
            ],
            "files"; [
                "dist/vue-burger-menu.common.js",
                "dist/vue-burger-menu.umd.js"
            ]
        }

    }
</script>

<style scoped>
.bm-burger-button {
      position: fixed;
      width: 36px;
      height: 30px;
      left: 36px;
      top: 36px;
      cursor: pointer;
    }
    .bm-burger-bars {
      background-color: #373a47;
    }
    .line-style {
      position: absolute;
      height: 20%;
      left: 0;
      right: 0;
    }
    .cross-style {
      position: absolute;
      top: 12px;
      right: 2px;
      cursor: pointer;
    }
    .bm-cross {
      background: #bdc3c7;
    }
    .bm-cross-button {
      height: 24px;
      width: 24px;
    }
    .bm-menu {
      height: 100%; /* 100% Full-height */
      width: 0; /* 0 width - change this with JavaScript */
      position: fixed; /* Stay in place */
      z-index: 1000; /* Stay on top */
      top: 0;
      left: 0;
      background-color: rgb(63, 63, 65); /* Black*/
      overflow-x: hidden; /* Disable horizontal scroll */
      padding-top: 60px; /* Place content 60px from the top */
      transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
    }

    .bm-overlay {
      background: rgba(0, 0, 0, 0.3);
    }
    .bm-item-list {
      color: #b8b7ad;
      margin-left: 10%;
      font-size: 20px;
    }
    .bm-item-list > * {
      display: flex;
      text-decoration: none;
      padding: 0.7em;
    }
    .bm-item-list > * > span {
      margin-left: 10px;
      font-weight: 700;
      color: white;
    }
</style>

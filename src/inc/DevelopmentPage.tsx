import { FunctionComponent } from "react";
import DevelopmentStart from "../components/DevelopmentStart";
import DevelopmentToken from "../components/DevelopmentTokens";
import styles from "./DevelopmentPage.module.css";

const DevelopmentPage: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <DevelopmentStart />
      <section className={styles.setUpYourStyleEnvironmentParent}>
        <h3 className={styles.setUpYour}>Set up your style environment</h3>
        <div className={styles.frameGroup}>
          <div className={styles.installDependenciesCssReseParent}>
            <div className={styles.installDependenciesCssContainer}>
              <ol className={styles.installDependenciesCssRese}>
                <li>
                  Install dependencies: CSS reset, design tokens, and ESLint
                  plugin:
                </li>
              </ol>
            </div>
            <div className={styles.yarnAddReact1820ReactDWrapper}>
              <div className={styles.yarnAddReact1820}>
              yarn add @hbk/css-reset @hbk/tokens
              </div>
            </div>
          </div>
          <div className={styles.installDependenciesCssReseParent}>
            <div className={styles.installDependenciesCssContainer}>
              <ol className={styles.installDependenciesCssRese} start={2}>
                <li>
                  Import these styles at the root of your app to support both
                  light and dark modes:
                </li>
              </ol>
            </div>
            <div className={styles.yarnAddReact1820ReactDWrapper}>
              <div className={styles.yarnAddReact1820}>
              yarn add @hbk/css-reset @hbk/tokens
              </div>
            </div>
          </div>
        </div>
      </section>
      <DevelopmentToken />
      <main className={styles.setUpYourBundlingEnvironmeParent}>
        <h3 className={styles.setUpYour2}>Set up your bundling environment</h3>
        <div className={styles.hbkDesignSystemContainer}>
          <p className={styles.hbkDesignSystem}>
            HBK Design System distributes CSS files via our packages. Your
            bundler must support this.
          </p>
          <p className={styles.weRecommendBabel}>
            We recommend Babel with either Webpack or Parcel. This ensures
            performance and styling consistency, especially with @hbk/css.
          </p>
        </div>
        <div className={styles.settingUpBabelParent}>
          <h3 className={styles.settingUpBabel}>Setting up Babel</h3>
          <section className={styles.installTheBabelPluginsParent}>
            <div className={styles.installDependenciesCssContainer}>
              <ol className={styles.installDependenciesCssRese}>
                <li>Install the Babel plugins:</li>
              </ol>
            </div>
            <div className={styles.yarnAddReact1820ReactDWrapper}>
              <div className={styles.yarnAddReact1820}>
              yarn add @hbk/tokens<br/>
              yarn add --dev @compiled/babel-plugin @compiled/babel-plugin-strip-runtime
              </div>
            </div>
          </section>
          <section className={styles.installTheBabelPluginsParent}>
            <div className={styles.installDependenciesCssContainer}>
              <ol className={styles.installDependenciesCssRese} start={2}>
                <li>Configure Babel (babel.config.js):</li>
              </ol>
            </div>
            <div className={styles.moduleexportsPluginsWrapper}>
              <div className={styles.moduleexports}>
                {`module.exports = {`}
                <br />
                {`  plugins: [`}
                <br />
                {`    '@hbk/tokens/babel-plugin',`}
                <br />
                {`    ['@compiled/babel-plugin', { transformerBabelPlugins: ['@hbk/tokens/babel-plugin'] }],`}
                <br />
                {`    [`}
                <br />
                {`      '@compiled/babel-plugin-strip-runtime',`}
                <br />
                {`      {`}
                <br />
                {`        sortShorthand: true,`}
                <br />
                {`        extractStylesToDirectory: { source: 'src', dest: 'dist' }`}
                <br />
                {`      },`}
                <br />
                {`    ],`}
                <br />
                {`  ],`}
                <br />
                {`};`}
              </div>
            </div>
          </section>
        </div>
        <div className={styles.settingUpBabelParent}>
          <h3 className={styles.settingUpBabel}>
            Setting up Parcel (recommended)
          </h3>
          <section className={styles.installTheBabelPluginsParent}>
            <div className={styles.installDependenciesCssContainer}>
              <ol className={styles.installDependenciesCssRese}>
                <li>Parcel is the recommended bundler used across HBK.</li>
              </ol>
            </div>
            <div className={styles.yarnAddReact1820ReactDWrapper}>
              <div className={styles.yarnAddReact1820}>
              yarn add @hbk/tokens<br />
              yarn add --dev @compiled/parcel-config
              </div>
            </div>
          </section>
          <section className={styles.thenCreateTheseConfigFilesParent}>
            <div className={styles.installDependenciesCssContainer}>
              <ol className={styles.installDependenciesCssRese} start={2}>
                <li>
                  <span>Then create these config files:</span>
                </li>
              </ol>
              <p className={styles.weRecommendBabel}>
                <b>.compiledcssrc</b>
              </p>
            </div>
            <div className={styles.transformerbabelpluginsWrapper}>
              <div className={styles.moduleexports}>
                {`{`}
                <br />
                {`  "transformerBabelPlugins": [["@hbk/tokens/babel-plugin"]],`}
                <br />
                {`  "extract": true,`}
                <br />
                {`  "inlineCss": true,`}
                <br />
                {`  "sortShorthand": true`}
                <br />
                {`}`}
              </div>
            </div>
          </section>
          <section className={styles.parcelrcParent}>
            <div className={styles.parcelrc}>.parcelrc</div>
            <div className={styles.transformerbabelpluginsWrapper}>
              <div className={styles.moduleexports}>
                {`{`}
                <br />
                {`  "extends": ["@parcel/config-default", "@compiled/parcel-config"]`}
                <br />
                {`}`}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default DevelopmentPage;

import { Global, css } from '@emotion/react';
import 'modern-normalize';

export const GlobalStyles = () => {
  return (
    <Global
      styles={css`

      root {
        --modal-shadow-color: rgba(22, 22, 22, 0.05);
      }
        body {
          margin: 0;
          font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
            'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
            'Helvetica Neue', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          font-size: 14px;
        }
        code {
          font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p {
          margin: 0;
        }
        ul,
        ol {
          list-style: none;
          padding: 0;
          margin: 0;
          padding: 0;
        }
        img {
          display: block;
          max-width: 100%;
          height: auto;
        }
        
        .dark {
          --first-text-color: rgba(255, 255, 255, 1);
          --last-text-color: rgba(255, 255, 255, 0.5);

          --heder-bg-color: rgba(22, 22, 22, 1);
          --text-theme-color: rgba(255, 255, 255, 0.5);
          --fill-icon-plus: rgba(190, 219, 176, 1);
          --color-icon-plus: rgba(22, 22, 22, 1);
          

          --main-bg-color: rgba(31, 31, 31, 1);
          --main-last-bg-color: rgba(18, 18, 18, 1);

          --sidebar-first-bg-color: rgba(18, 18, 18, 1);
          --sidebar-second-bg-color: rgba(31, 31, 31, 1);
          --sidebar-active-bg-color: rgba(31, 31, 31, 0.4);

          --sidebar-bg-icon-logo: rgba(31, 31, 31, 1);
          --sidebar-color-icon-logo: rgba(255, 255, 255, 1);

          --sidebar-bg-icon-plus-color: rgba(190, 219, 176, 1);
          --sidebar-bg-icon-logout-color: rgba(190, 219, 176, 1);
          --sidebar-line-color: rgba(255, 255, 255, 0.1);

          --bord-list-color: rgba(255, 255, 255, 1);

          --button-bg-color: rgba(190, 219, 176, 1);

          --modal-bg-color: #151515;
          
        }
        .light {

          --first-text-color: rgba(22, 22, 22, 1);
          --last-text-color: rgba(22, 22, 22, 0.7);

          --heder-bg-color: rgba(252, 252, 252, 1);
          --text-theme-color: rgba(22, 22, 22, 1);
          --fill-icon-plus: rgba(190, 219, 176, 1);
          --color-icon-plus: rgba(22, 22, 22, 1);

          --main-bg-color: rgba(246, 246, 247, 1);
          --main-last-bg-color: rgba(255, 255, 255, 1);

          --sidebar-first-bg-color: rgba(255, 255, 255, 1);
          --sidebar-second-bg-color: rgba(246, 246, 247, 1);
          --sidebar-active-bg-color: rgba(246, 246, 247, 0.4);

          --sidebar-bg-icon-logo: rgba(31, 31, 31, 1);
          --sidebar-color-icon-logo: rgba(255, 255, 255, 1);
          
          --sidebar-bg-icon-plus-color: rgba(190, 219, 176, 1);
          --sidebar-bg-icon-logout-color: rgba(190, 219, 176, 1);
          --sidebar-line-color: rgba(22, 22, 22, 0.1);
        
          --bord-list-color: rgba(22, 22, 22, 1);

          --button-bg-color: rgba(190, 219, 176, 1);

          --modal-bg-color: rgba(252, 252, 252, 1);
          
        }
        
        .violet {
          --first-text-color: rgba(22, 22, 22, 1);
          --last-text-color: rgba(22, 22, 22, 0.5);

          --heder-bg-color: rgba(255, 255, 255, 1);
          --text-theme-color: rgba(22, 22, 22, 1);
          --fill-icon-plus: rgba(236, 237, 253, 1);
          --color-icon-plus: rgba(255, 255, 255, 1);
          

          --main-bg-color: rgba(236, 237, 253, 1);
          --main-last-bg-color: rgba(255, 255, 255, 1);

          --sidebar-first-bg-color: rgba(82, 85, 188, 1);
          --sidebar-second-bg-color: rgba(143, 146, 214, 1);
          --sidebar-active-bg-color: rgba(143, 146, 214, 0.4);

          --sidebar-bg-icon-logo: rgba(236, 237, 253, 1);
          --sidebar-color-icon-logo: rgba(82, 85, 188, 1);
          
          --sidebar-bg-icon-plus-color: rgba(184, 188, 253, 1);
          --sidebar-color-icon-plus: rgba(22, 22, 22, 1);
          --sidebar-bg-icon-logout-color: rgba(255, 255, 255, 1);
          --sidebar-line-color: rgba(255, 255, 255, 0.1);


          --bord-list-color: rgba(255, 255, 255, 1);

          --button-bg-color: rgba(82, 85, 188, 1);

          --modal-bg-color: rgba(252, 252, 252, 1);
          
        }
      `}
    />
  );
};

export default GlobalStyles;

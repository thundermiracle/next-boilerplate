import makeNextApp from 'next-mui-helper/nextjs/makeNextApp';
import theme from 'styles/theme';
import Layout from 'views/layout/Layout';

export default makeNextApp(theme, Layout, true);

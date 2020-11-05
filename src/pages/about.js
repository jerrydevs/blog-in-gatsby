import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

export default () => (
  <Layout>
    <h1>This is my personal website</h1>
    <Link to="/">&larr; Home</Link>
  </Layout>
);

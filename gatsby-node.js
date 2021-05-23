exports.sourceNodes = async (
    { actions, reporter, createNodeId, createContentDigest },
    { discourageSearchEngines = true }
) => {
    const { createNode } = actions;

    const settings = {
        discourageSearchEngines,
    };

    createNode({
        id: createNodeId('WpGraphQlSeoSettings'),
        parent: null,
        children: [],
        internal: {
            type: 'WpGraphQlSeoSettings',
            mediaType: `application/json`,
            content: JSON.stringify(settings),
            contentDigest: createContentDigest(settings),
        },
        ...settings,
    });

    reporter.info(`Created settings node for gatsby-plugin-wpgraphql-seo`);
};

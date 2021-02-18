module.exports = {
    title: generateTitle(title),
    description: generateDescription(description, license),
    tableOfContents: generateTable(install, usage, contributing, title, contributors),
    installation: generateInstallation(install),
    usage: generateUsage(),
    test: generateTest(),
    contributing: generateContributing(),
    contributors: generateContributors(),
    contact: generateContact(),
    license: generateLicense(),
};


const generateTeamId = () => {
    let teamId = Math.random() * 1000
    teamId = Math.floor(teamId);
    return `ED-${teamId}`;
}


module.exports = generateTeamId;
export const Header = ({ selectedTeam, teamMemberCount }) => {
  return (
    <header>
      <h1> Team Member Allocation</h1>
      <h3>
        {selectedTeam} has {teamMemberCount} Members
      </h3>
    </header>
  );
};

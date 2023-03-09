
import femaleProfile from "./images/femaleProfile.jpg";
import maleProfile from "./images/maleProfile.jpg";

export const Employees = () => {
  

  return (
    <main className="container">
      <div class="row justify-content-center mt-3 mb-3">
        <div class="col-6">
          <select
            className="form-select form-select-lg"
            value={selectedTeam}
            onChange={handleTeamSelectionChange}
          >
            <option value="TeamA">TeamA</option>
            <option value="TeamB">TeamB</option>
            <option value="TeamC">TeamC</option>
            <option value="TeamD">TeamD</option>
          </select>
        </div>
      </div>

      <div class="row justify-content-center mt-3 mb-3">
        <div class="col-8">
          <div class="card-collection">
            {employees.map((employee) => (
              <div
                id={employee.id}
                className={
                  employee.teamName === selectedTeam
                    ? "card m-2 standout"
                    : "card m-2"
                }
                style={{ cursor: "pointer" }}
              >
                {employee.gender === "male" ? (
                  <img
                    src={maleProfile}
                    className="card-img-top"
                    alt="maleIcon"
                  />
                ) : (
                  <img
                    src={femaleProfile}
                    className="card-img-top"
                    alt="femaleIcon"
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title">Full Name: {employee.fullName}</h5>
                  <p className="card-name">
                    <b>Designation: </b>
                    {employee.designation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

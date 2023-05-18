import { signinApi as employeeLoginApi } from "./constants";
import { signinApi as jobSeekerLoginApi } from "./constants";
import { signoutApi } from "./constants";


export const signout = async () => {
  try {
    await fetch(signoutApi, { method: "POST" });
    localStorage.removeItem("username")

  } catch (error) {
    return error;
  }

}

export const login = async (email, password, role) => {
  try {
    const response = await fetch(
      role === "employer" ? employeeLoginApi : jobSeekerLoginApi,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, role }),
      }
    );
    if (response.ok) {
      const data = await response.json();
      localStorage.setItem(`${role}_token`, data.token);
    } else {
      const errorData = await response.json();
      localStorage.removeItem(`${role}_token`);
      return errorData;
    }
  } catch (error) {
    return error;
  }
};

export const signup = async (email, password, role) => {
  try {
    const response = await fetch(
      role === "employer" ? employeeLoginApi : jobSeekerLoginApi,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, role }),
      }
    );
    if (response.ok) {
      const data = await response.json();
      localStorage.setItem(`${role}_token`, data.token);
    } else {
      const errorData = await response.json();
      localStorage.removeItem(`${role}_token`);
      return errorData;
    }
  } catch (error) {
    return error;
  }
};

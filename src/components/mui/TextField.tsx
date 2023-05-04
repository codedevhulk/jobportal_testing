import { Stack, TextField, InputAdornment } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

export const MuiTextField = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>
      <Stack>
        <TextField label="small Secondary" size="small" color="secondary" />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField label="form input" required />
        <TextField
          label="disabled"
          helperText="Do not share your password with anyone"
          disabled
        />
        <TextField label="read only" InputProps={{ readOnly: true }} />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
          }}
        />
        <TextField
          type={showPassword ? "text" : "password"}
          label="password"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" style={{ cursor: "pointer" }}>
                {showPassword ? (
                  <VisibilityIcon onClick={handlePasswordVisibility} />
                ) : (
                  <VisibilityOffIcon onClick={handlePasswordVisibility} />
                )}
              </InputAdornment>
            ),
          }}
        />
      </Stack>
    </Stack>
  );
};

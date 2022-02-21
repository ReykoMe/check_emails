import { Alert, Box, Button, Dialog, Drawer, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReactJson from "react-json-view";
import ClientApi from "./api";
import MainWrapper from "./components/layout/main-layout.component";
import { validateInput } from "./utils/validate-input";

const App: React.FC = (): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>(
    "testingapis@hubspot.com"
  );
  const [errors, setErrors] = useState<string[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState(null);

  const handleSubmit = async (): Promise<void> => {
    setIsFetching(true);
    const errors = validateInput(inputValue);
    if (errors.length) {
      setIsFetching(false);
      return setErrors(errors);
    }
    setErrors([]);
    const userInfo = await ClientApi.user.get.byEmail(inputValue);
    setUserInfo(userInfo);
    setIsFetching(false);
  };

  const handleChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);
  };

  const handleEnterSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <MainWrapper>
      <Dialog open={Boolean(userInfo)} PaperProps={{ sx: { padding: 1 } }}>
        {userInfo && <ReactJson src={userInfo} />}
      </Dialog>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            width: "30%",
            display: "flex",
            "& .MuiOutlinedInput-root": {
              borderBottomRightRadius: 0,
              borderTopRightRadius: 0,
            },
            "& .MuiButton-root": {
              borderBottomLeftRadius: 0,
              borderTopLeftRadius: 0,
            },
          }}
        >
          <TextField
            variant="outlined"
            fullWidth
            label="Please, enter email for search"
            value={inputValue}
            onChange={handleChangeInputValue}
            onKeyPress={handleEnterSubmit}
            required
          />
          <Button
            sx={{ px: 5 }}
            variant="contained"
            onClick={handleSubmit}
            disabled={isFetching}
          >
            Submit
          </Button>
        </Box>
        {Boolean(errors.length) && (
          <Box sx={{ width: "30%", mt: 2 }}>
            <Alert severity="error">
              {errors.map((error, idx) => (
                <>
                  <span key={idx}>- {error}</span>
                  <br />
                </>
              ))}
            </Alert>
          </Box>
        )}
      </Box>
    </MainWrapper>
  );
};

export default App;

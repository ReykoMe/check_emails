import { Alert, Box, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import MainWrapper from "./components/layout/main-layout.component";
import { validateInput } from "./utils/validate-input";

const App: React.FC = (): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>("");
  const [errors, setErrors] = useState<string[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const handleSubmit = (): void => {
    setIsFetching(true);
    const errors = validateInput(inputValue);
    if (errors.length) {
      setIsFetching(false);
      return setErrors(errors);
    }
    setErrors([]);
    //Do api call
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

  useEffect(() => {
    // const res = fetch(
    //   "https://api.hubapi.com/contacts/v1/contact/email/testingapis@hubspot.com/profile?hapikey=demo"
    // )
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
  }, []);

  return (
    <MainWrapper>
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

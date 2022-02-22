import { Alert, Box, Dialog } from "@mui/material";
import React, { useCallback, useState } from "react";
import ReactJson from "react-json-view";
import { ClientApi } from "./api";
import { MainWrapper } from "./components/layout/main-layout.component";
import { validateInput } from "./utils/validate-input";
import { Form } from "./components/form";

const App: React.FC = (): JSX.Element => {
  //  STATES
  const [errors, setErrors] = useState<string[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState(null);

  // HANDLERS
  const handleSubmit = useCallback(async (value: string): Promise<void> => {
    setIsFetching(true);
    const errors = validateInput(value);

    if (errors.length) {
      setIsFetching(false);
      return setErrors(errors);
    }
    setErrors([]);
    const userInfo = await ClientApi.user.get.byEmail(value);
    setUserInfo(userInfo);
    setIsFetching(false);
  }, []);

  const handleCloseUserInfo = useCallback((): void => {
    setUserInfo(null);
  }, []);

  return (
    <MainWrapper>
      <Dialog
        open={Boolean(userInfo)}
        onClose={handleCloseUserInfo}
        sx={{ p: 3 }}
        fullWidth
        maxWidth={"lg"}
        transitionDuration={200}
        PaperProps={{ sx: { padding: 1 } }}
      >
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
        <Form isFetching={isFetching} onSubmit={handleSubmit} />
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

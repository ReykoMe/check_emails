import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";

type FormProps = {
  disableSubmitButton: boolean;
  onSubmit: (value: string) => void;
};

export const Form: React.FC<FormProps> = (props): JSX.Element => {
  // PROPS
  const { onSubmit, disableSubmitButton } = props;

  // STATES
  const [inputValue, setInputValue] = useState<string>(
    "testingapis@hubspot.com"
  );

  // HANDLERS
  const handleChangeInputValue = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { value } = e.target;
    setInputValue(value);
  };

  const handleSubmit = (): void => {
    onSubmit(inputValue);
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
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
        onKeyPress={handleEnter}
        required
      />
      <Button
        sx={{ px: 5 }}
        variant="contained"
        onClick={handleSubmit}
        disabled={disableSubmitButton}
      >
        Submit
      </Button>
    </Box>
  );
};

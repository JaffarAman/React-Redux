import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function FormButton({ value ,addFun }) {
  // console.log(value)
  return (
    <Stack spacing={2} direction="row">
      <Button
        style={{ width: "100%", backgroundColor: addFun ? "#52c234" : "#09DEEA" }}
        type="submit"
        variant="contained"
        onClick={addFun ? ()=>addFun() :null }
        
      >
        {value === true ? (
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          value
        )}
      </Button>
    </Stack>
  );
}

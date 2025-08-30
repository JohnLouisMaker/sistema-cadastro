import { Button } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";

export default function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/paginal-inicial"
        element={
          <Button variant="contained" color="primary">
            Home
          </Button>
        }
      />
      <Route path="*" element={<Navigate to="/paginal-inicial" />} />
    </Routes>
  );
}

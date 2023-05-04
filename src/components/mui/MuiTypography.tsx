import React, { useState } from "react";
import {
  Typography,
  Button,
  Stack,
  IconButton,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
//textfield
// import TextField from "@material-ui/core/TextField";

export const MuiTypography = () => {
  const [formats, setFormats] = useState<string | null>(null);
  const handleFormatChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatedFormats: string | null
  ) => {
    setFormats(updatedFormats);
  };
  return (
    <div className="App">
      <Typography variant="h1">h1 heading</Typography>
      <Typography variant="h2">h2 heading</Typography>
      <Typography variant="h3">h3 heading</Typography>
      <Typography variant="h4" gutterBottom>
        h4 heading
      </Typography>
      <Typography variant="h5" component="h1">
        h5 heading
      </Typography>
      <Typography variant="h6">h6 heading</Typography>
      <Typography variant="subtitle1">subtitle1</Typography>
      <Typography variant="subtitle2">subtitle2</Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        tenetur similique tempora corrupti odit repudiandae sunt sit accusamus
        voluptates id odio ipsa aspernatur nisi harum, veritatis eos quos?
        Numquam, temporibus.{" "}
      </Typography>
      <Typography variant="body2">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
        porro, recusandae nisi alias aliquid ea quia. Tempora placeat voluptate
        illo enim in, id tempore pariatur magni dolorem eveniet vel est?{" "}
      </Typography>
      <Stack spacing={4}>
        <Stack spacing={2} direction="row">
          <Button variant="text" href="http://google.com">
            text
          </Button>
          <Button variant="contained">contained </Button>
          <Button variant="outlined">outlined</Button>
        </Stack>
        <Stack spacing={2} direction="row">
          <Button variant="contained" color="primary">
            primary
          </Button>
          <Button variant="contained" color="secondary">
            secondary
          </Button>
          <Button variant="contained" color="error">
            error
          </Button>
          <Button variant="contained" color="warning">
            warning
          </Button>
          <Button variant="contained" color="info">
            info
          </Button>
          <Button variant="contained" color="success">
            success
          </Button>
        </Stack>
        <Stack display="block" spacing={2} direction="row">
          <Button variant="contained" size="small">
            small
          </Button>
          <Button variant="contained" size="medium">
            medium
          </Button>
          <Button variant="contained" size="large">
            large
          </Button>
        </Stack>
        <Stack spacing={2} direction="row">
          <Button variant="contained" startIcon={<SendIcon />} disableElevation>
            Send
          </Button>
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            onClick={() => alert("clicked")}
          >
            Send
          </Button>
          <IconButton aria-label="send" color="success" size="medium">
            <SendIcon />
          </IconButton>
        </Stack>
        <Stack spacing={2} direction="row">
          <ButtonGroup
            variant="contained"
            orientation="vertical"
            size="small"
            color="primary"
            aria-label="alignment button group"
          >
            <Button>left</Button>
            <Button>center</Button>
            <Button>right</Button>
          </ButtonGroup>
        </Stack>
        <Stack direction="row">
          <ToggleButtonGroup
            value={formats}
            onChange={handleFormatChange}
            size="small"
            color="success"
            orientation="vertical"
          >
            <ToggleButton value="bold" aria-label="bold">
              <FormatBoldIcon />
            </ToggleButton>
            <ToggleButton value="italic" aria-label="italic">
              <FormatItalicIcon />
            </ToggleButton>
            <ToggleButton value="underline" aria-label="underline">
              <FormatUnderlinedIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
        {/* <Stack spacing={2}></Stack> */}
      </Stack>
    </div>
  );
};

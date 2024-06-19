import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Fab,
  Typography,
} from "@mui/material";
import { SpotifyCard } from "../../models/card.type";
import SpotifyCardInfoStyle from "./SpotifyCardInfo.module.css";
import { PlayArrow } from "@mui/icons-material";

export const SpotifyCardInfo = ({ data }: { data: SpotifyCard }) => {
  return (
    <Card className={SpotifyCardInfoStyle.card}>
      <CardMedia
        component="img"
        height="194"
        image={data?.images[0]?.url}
        alt={data.title}
        className={SpotifyCardInfoStyle.img}
      ></CardMedia>

      <CardContent style={{ padding: "0", position: "relative" }}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {data.title}
        </Typography>
        <Typography variant="body2">{data.subtitle}</Typography>
        <Fab
          color="secondary"
          size="medium"
          aria-label="add"
          className={SpotifyCardInfoStyle.actionButton}
        >
          <PlayArrow />
        </Fab>
      </CardContent>
    </Card>
  );
};

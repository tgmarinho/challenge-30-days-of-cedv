import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from "@material-ui/core";
import { Restaurant, LocalCafe, AccessibilityNew } from "@material-ui/icons";

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "#FFA726",
    fontWeight: "bold",
    color: theme.palette.common.white
  },
  body: {
    fontSize: 16,
    fontWeight: "bold",
    alignContent: "center",
    color: theme.palette.common.gray
  }
}))(TableCell);

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
});

const WeekComponent = props => {
  const { classes, rows } = props;

  return (
    <Fragment>
      <Paper className={classes.root} elevation={2}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <CustomTableCell>Dia 1</CustomTableCell>
              <CustomTableCell>Dia 2</CustomTableCell>
              <CustomTableCell>Dia 3</CustomTableCell>
              <CustomTableCell>Dia 4</CustomTableCell>
              <CustomTableCell>Dia 5</CustomTableCell>
              <CustomTableCell>Dia 6</CustomTableCell>
              <CustomTableCell>Dia 7</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => {
              return (
                <TableRow key={row.id}>
                  <CustomTableCell component="th" scope="row">
                    {row.dia1}
                  </CustomTableCell>
                  <CustomTableCell>{row.dia2}</CustomTableCell>
                  <CustomTableCell>{row.dia3}</CustomTableCell>
                  <CustomTableCell>{row.dia4}</CustomTableCell>
                  <CustomTableCell>{row.dia5}</CustomTableCell>
                  <CustomTableCell>{row.dia6}</CustomTableCell>
                  <CustomTableCell>{row.dia7}</CustomTableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>

      <Divider />

      <br />

      <Paper elevation={2}>
        <Typography variant="subheading"> Legenda: </Typography>
        <List component="nav">
          <ListItem button>
            <ListItemIcon>
              <Restaurant />
            </ListItemIcon>
            <ListItemText primary="Alimentação Forte" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <LocalCafe />
            </ListItemIcon>
            <ListItemText primary="Jejum de 16h" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <AccessibilityNew />
            </ListItemIcon>
            <ListItemText primary="Tirar medidas do corpo" />
          </ListItem>
        </List>
      </Paper>
    </Fragment>
  );
};

WeekComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(WeekComponent);

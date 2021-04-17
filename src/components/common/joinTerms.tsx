// eslint-disable-next-line no-use-before-define
import * as React from 'react'
import {
  createStyles, Theme, withStyles, WithStyles,
} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl';

const styles = (theme: Theme) => createStyles({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
})

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const {
    children, classes, onClose, ...other
  } = props
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  )
})

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent)

const DialogActions = withStyles((theme: Theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions)

interface iAcceptCallback {
  (acceptValue: boolean) : void
}

type JoinTermsProps = {
  acceptCallback: iAcceptCallback,
  acceptValue: boolean,
  errorText?: string
}

const JoinTerms:React.FC<JoinTermsProps> = ({ acceptValue, acceptCallback, errorText }):React.ReactElement => {
  const [open, setOpen] = React.useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    if (acceptValue) {
      acceptCallback(false)
    } else {
      setOpen(true)
    }
  }

  const handleAccept = (userAcceptValue: boolean) => {
    acceptCallback(userAcceptValue)
    setOpen(false)
  }

  // React.useEffect(() => {
  //   alert(acceptValue)
  // }, [acceptValue])

  return (
    <div>
      <FormControl error={errorText !== null}>
      <FormControlLabel
        control={(
          <Checkbox
            checked={acceptValue}
            // onChange={() => {
            //   console.log('test')
            // }}
            onClick={handleOpen}
            color="primary"
          />

        )}
        label="Accept Join Terms"
      />
      <FormHelperText className="textAlignCenter">{errorText}</FormHelperText>
      </FormControl>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Modal title
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            this is term bla bla bla...
            this is term bla bla bla...this is term bla bla bla...
            this is term bla bla bla...
            this is term bla bla bla...
            this is term bla bla bla...
            this is term bla bla bla...
            this is term bla bla bla...
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={() => {
              handleAccept(false)
            }}
            color="primary"
          >
            disagree
          </Button>
          <Button
            autoFocus
            onClick={() => {
              handleAccept(true)
            }}
            color="primary"
          >
            agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default JoinTerms

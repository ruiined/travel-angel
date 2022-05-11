import { useState, useEffect } from "react";
import AddTransfer from "./addTransfer";
import axios from "axios";
import { OutboundTransferCard } from "./outboundTransferCard";
import { InboundTransferCard } from "./inboundTransferCard";
import { useParams } from "react-router-dom";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

const Transfers = ({ session }) => {
  const { tripId } = useParams();
  const [state, setState] = useState(0);

  const handleUpload = async () => {
    setState((prev) => prev + 1);
  };

  const userId = session;

  const [open, setOpen] = useState(false);
  const [emptyFields, setEmptyFields] = useState([])
  const [transfer, setTransfer] = useState({
    pickupTime: "",
    dropoffTime: "",
    pickupAddress: {
      buildingNumber: "",
      buildingName: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      postalCode: "",
      stateCounty: "",
      countryCode: "",
    },
    dropoffAddress: {
      buildingNumber: "",
      buildingName: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      postalCode: "",
      stateCounty: "",
      countryCode: "",
    },
    isOutbound: "",
    company: "",
    contactNumber: "",
    bookingReference: "",
    user: userId,
    trip: tripId,
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      pickupTime,
      dropoffTime,
      pickupAddress,
      dropoffAddress,
      isOutbound,
      company,
      contactNumber,
      bookingReference,
      user,
      trip,
    } = transfer;

    const newTransfer = {
      pickupTime,
      dropoffTime,
      pickupAddress,
      dropoffAddress,
      isOutbound,
      company,
      contactNumber,
      bookingReference,
      user,
      trip,
    };

    if (company === "" || contactNumber === "" || pickupTime === "" || dropoffTime === "" || pickupAddress.addressLine1 === "" || pickupAddress.city === "" || pickupAddress.postalCode === "" || dropoffAddress.addressLine1 === "" || dropoffAddress.city === "" || dropoffAddress.postalCode === "" || isOutbound === ""){
      setEmptyFields(['company', 'contactNumber', 'pickupTime', 'dropoffTime', 'pickupAddress.addressLine1', 'pickupAddress.city', 'pickupAddress.postalCode', 'dropoffAddress.addressLine1', 'dropoffAddress.city', 'dropoffAddress.postalCode', 'isOutbound'])
      return
    }

    axios
      .post("http://localhost:8000/dashboard/transfers/", newTransfer)
      .then(() => {
        setTransfer({
          pickupTime: "",
          dropoffTime: "",
          pickupAddress: {
            buildingNumber: "",
            buildingName: "",
            addressLine1: "",
            addressLine2: "",
            city: "",
            postalCode: "",
            stateCounty: "",
            countryCode: "",
          },
          dropoffAddress: {
            buildingNumber: "",
            buildingName: "",
            addressLine1: "",
            addressLine2: "",
            city: "",
            postalCode: "",
            stateCounty: "",
            countryCode: "",
          },
          isOutbound: "",
          company: "",
          contactNumber: "",
          bookingReference: "",
          user: userId,
          trip: tripId,
        });
        handleClose();
      });
  };

  const [outboundTransfer, setOutboundTransfer] = useState([]);
  const [inboundTransfer, setInboundTransfer] = useState([]);

  useEffect(() => {
    if (userId !== "null") {
      axios
        .get(`http://localhost:8000/dashboard/transfers/${userId}/${tripId}`)
        .then((res) => {
          const outbound = res.data.outbound;
          const inbound = res.data.inbound;
          setOutboundTransfer(outbound);
          setInboundTransfer(inbound);
        });
    }
  }, [transfer, state]);

  if (outboundTransfer.length || inboundTransfer.length) {
    return (
      <div className="transfers">
        <div className="transfer-header">
          <h1>Your transfers</h1>
        </div>
        <div className="transfers-content">
          <div className="transfers-content-outbound">
            <h1 className="transfer-content-subheading">Outbound</h1>
            <OutboundTransferCard
              outboundTransfer={outboundTransfer}
              handleUpload={handleUpload}
              userId={userId}
              tripId={tripId}
            />
          </div>
          <div className="transfers-content-inbound">
            <h1 className="transfers-content-subheading">Inbound</h1>
            <InboundTransferCard
              inboundTransfer={inboundTransfer}
              handleUpload={handleUpload}
              userId={userId}
              tripId={tripId}
            />
          </div>
        </div>
        <div>
          <Fab
            size="large"
            color="secondary"
            aria-label="add"
            onClick={handleOpen}
          >
            <AddIcon />
          </Fab>
          <AddTransfer
            open={open}
            handleOpen={handleOpen}
            handleClose={handleClose}
            transferData={transfer}
            userId={userId}
            tripId={tripId}
            transferId={null}
            emptyFields={emptyFields}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Fab
          size="large"
          color="secondary"
          aria-label="add"
          onClick={handleOpen}
        >
          <AddIcon />
        </Fab>
        <AddTransfer
          open={open}
          handleOpen={handleOpen}
          handleClose={handleClose}
          transferData={transfer}
          userId={userId}
          tripId={tripId}
          transferId={null}
          emptyFields={emptyFields}
        />
      </div>
    );
  }
};

export default Transfers;

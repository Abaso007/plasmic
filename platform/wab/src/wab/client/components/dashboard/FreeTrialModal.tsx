// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import { BareModal } from "@/wab/client/components/studio/BareModal";
import {
  DefaultFreeTrialModalProps,
  PlasmicFreeTrialModal,
} from "@/wab/client/plasmic/plasmic_kit_dashboard/PlasmicFreeTrialModal";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import * as React from "react";

export interface FreeTrialModalProps extends DefaultFreeTrialModalProps {
  onConfirm?: () => void;
}

function FreeTrialModal_(
  props: FreeTrialModalProps,
  ref: HTMLElementRefOf<"div">
) {
  const { onConfirm, ...rest } = props;
  return (
    <BareModal onClose={onConfirm} width={"fit-content"}>
      <PlasmicFreeTrialModal
        root={{ ref }}
        {...rest}
        confirmButton={{ onClick: onConfirm }}
      />
    </BareModal>
  );
}

const FreeTrialModal = React.forwardRef(FreeTrialModal_);
export default FreeTrialModal;

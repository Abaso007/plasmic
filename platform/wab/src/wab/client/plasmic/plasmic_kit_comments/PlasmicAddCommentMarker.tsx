/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: BP7V3EkXPURJVwwMyWoHn
// Component: b0TlBn4m87ta

import * as React from "react";

import {
  Flex as Flex__,
  SingleBooleanChoiceArg,
  StrictProps,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  hasVariant,
  useDollarState,
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";

import IconButton from "../../components/widgets/IconButton"; // plasmic-import: LPry-TF4j22a/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_plasmic_kit_comments.module.css"; // plasmic-import: BP7V3EkXPURJVwwMyWoHn/projectcss
import sty from "./PlasmicAddCommentMarker.module.css"; // plasmic-import: b0TlBn4m87ta/css

import SpeechBubblePlusSvgIcon from "../plasmic_kit_icons/icons/PlasmicIcon__SpeechBubblePlusSvg"; // plasmic-import: g2gTPsRaJ/icon

createPlasmicElementProxy;

export type PlasmicAddCommentMarker__VariantMembers = {
  isRecording: "isRecording";
};
export type PlasmicAddCommentMarker__VariantsArgs = {
  isRecording?: SingleBooleanChoiceArg<"isRecording">;
};
type VariantPropType = keyof PlasmicAddCommentMarker__VariantsArgs;
export const PlasmicAddCommentMarker__VariantProps = new Array<VariantPropType>(
  "isRecording"
);

export type PlasmicAddCommentMarker__ArgsType = {};
type ArgPropType = keyof PlasmicAddCommentMarker__ArgsType;
export const PlasmicAddCommentMarker__ArgProps = new Array<ArgPropType>();

export type PlasmicAddCommentMarker__OverridesType = {
  icon?: Flex__<typeof IconButton>;
  freeBox?: Flex__<"div">;
  svg?: Flex__<"svg">;
};

export interface DefaultAddCommentMarkerProps {
  isRecording?: SingleBooleanChoiceArg<"isRecording">;
  className?: string;
}

const $$ = {};

function PlasmicAddCommentMarker__RenderFunc(props: {
  variants: PlasmicAddCommentMarker__VariantsArgs;
  args: PlasmicAddCommentMarker__ArgsType;
  overrides: PlasmicAddCommentMarker__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants,
  };

  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "isRecording",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isRecording,
      },
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs,
  });

  return (
    <IconButton
      data-plasmic-name={"icon"}
      data-plasmic-override={overrides.icon}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames("__wab_instance", sty.icon)}
      size={"small"}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox, {
          [sty.freeBoxisRecording]: hasVariant(
            $state,
            "isRecording",
            "isRecording"
          ),
        })}
      >
        <SpeechBubblePlusSvgIcon
          data-plasmic-name={"svg"}
          data-plasmic-override={overrides.svg}
          className={classNames(projectcss.all, sty.svg)}
          role={"img"}
        />
      </div>
    </IconButton>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  icon: ["icon", "freeBox", "svg"],
  freeBox: ["freeBox", "svg"],
  svg: ["svg"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  icon: typeof IconButton;
  freeBox: "div";
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAddCommentMarker__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAddCommentMarker__VariantsArgs;
    args?: PlasmicAddCommentMarker__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAddCommentMarker__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicAddCommentMarker__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicAddCommentMarker__ArgProps,
          internalVariantPropNames: PlasmicAddCommentMarker__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicAddCommentMarker__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "icon") {
    func.displayName = "PlasmicAddCommentMarker";
  } else {
    func.displayName = `PlasmicAddCommentMarker.${nodeName}`;
  }
  return func;
}

export const PlasmicAddCommentMarker = Object.assign(
  // Top-level PlasmicAddCommentMarker renders the root element
  makeNodeComponent("icon"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicAddCommentMarker
    internalVariantProps: PlasmicAddCommentMarker__VariantProps,
    internalArgProps: PlasmicAddCommentMarker__ArgProps,
  }
);

export default PlasmicAddCommentMarker;
/* prettier-ignore-end */

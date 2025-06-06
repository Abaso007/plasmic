/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: taNK5uwsoPrzfpYmBVwUwX
// Component: q0dOUzxbuGpk

import * as React from "react";

import {
  Flex as Flex__,
  StrictProps,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";

import { EmailText } from "@/wab/server/emails/components.tsx"; // plasmic-import: 7eMX-ae3z_Os/codeComponent

createPlasmicElementProxy;

export type PlasmicFooterText__VariantMembers = {};
export type PlasmicFooterText__VariantsArgs = {};
type VariantPropType = keyof PlasmicFooterText__VariantsArgs;
export const PlasmicFooterText__VariantProps = new Array<VariantPropType>();

export type PlasmicFooterText__ArgsType = { content?: string };
type ArgPropType = keyof PlasmicFooterText__ArgsType;
export const PlasmicFooterText__ArgProps = new Array<ArgPropType>("content");

export type PlasmicFooterText__OverridesType = {
  root?: Flex__<typeof EmailText>;
};

export interface DefaultFooterTextProps {
  content?: string;
  className?: string;
}

const $$ = {};

function PlasmicFooterText__RenderFunc(props: {
  variants: PlasmicFooterText__VariantsArgs;
  args: PlasmicFooterText__ArgsType;
  overrides: PlasmicFooterText__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          content: "This is a text",
        },
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

  return (
    <EmailText
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      children={args.content}
      className={classNames(
        "__wab_instance",
        "root_reset_taNK5uwsoPrzfpYmBVwUwX",
        "plasmic_default_styles",
        "plasmic_mixins",
        "plasmic_tokens",
        "FooterText__root__yezgW"
      )}
      style={{ fontSize: 11, color: "#60646C", textAlign: "center" }}
    />
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: typeof EmailText;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFooterText__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFooterText__VariantsArgs;
    args?: PlasmicFooterText__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFooterText__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicFooterText__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicFooterText__ArgProps,
          internalVariantPropNames: PlasmicFooterText__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicFooterText__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooterText";
  } else {
    func.displayName = `PlasmicFooterText.${nodeName}`;
  }
  return func;
}

export const PlasmicFooterText = Object.assign(
  // Top-level PlasmicFooterText renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicFooterText
    internalVariantProps: PlasmicFooterText__VariantProps,
    internalArgProps: PlasmicFooterText__ArgProps,
  }
);

export default PlasmicFooterText;
/* prettier-ignore-end */

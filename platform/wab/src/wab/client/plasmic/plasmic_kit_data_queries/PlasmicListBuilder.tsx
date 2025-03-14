// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9csusiyEETC5n9fFKLeYNK
// Component: _VRtHiszCx
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  hasVariant,
  SingleBooleanChoiceArg,
  StrictProps,
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as React from "react";
import KeyValueRow from "../../components/KeyValueRow"; // plasmic-import: udG9wNYCNL/component
import IconButton from "../../components/widgets/IconButton"; // plasmic-import: LPry-TF4j22a/component
import PlusIcon from "../plasmic_kit/PlasmicIcon__Plus"; // plasmic-import: -k064DlQ8k8-L/icon
import TrashIcon from "../plasmic_kit/PlasmicIcon__Trash"; // plasmic-import: 7bxap5bzcUODa/icon
import ChevronDownsvgIcon from "../plasmic_kit_icons/icons/PlasmicIcon__ChevronDownSvg"; // plasmic-import: xZrB9_0ir/icon
import plasmic_plasmic_kit_q_4_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import plasmic_plasmic_kit_design_system_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import projectcss from "./plasmic_plasmic_kit_data_queries.module.css"; // plasmic-import: 9csusiyEETC5n9fFKLeYNK/projectcss
import sty from "./PlasmicListBuilder.module.css"; // plasmic-import: _VRtHiszCx/css

export type PlasmicListBuilder__VariantMembers = {
  empty: "empty";
  hideIconButton: "hideIconButton";
};

export type PlasmicListBuilder__VariantsArgs = {
  empty?: SingleBooleanChoiceArg<"empty">;
  hideIconButton?: SingleBooleanChoiceArg<"hideIconButton">;
};

type VariantPropType = keyof PlasmicListBuilder__VariantsArgs;
export const PlasmicListBuilder__VariantProps = new Array<VariantPropType>(
  "empty",
  "hideIconButton"
);

export type PlasmicListBuilder__ArgsType = {
  title?: React.ReactNode;
  children?: React.ReactNode;
  icon?: React.ReactNode;
};

type ArgPropType = keyof PlasmicListBuilder__ArgsType;
export const PlasmicListBuilder__ArgProps = new Array<ArgPropType>(
  "title",
  "children",
  "icon"
);

export type PlasmicListBuilder__OverridesType = {
  root?: p.Flex<"div">;
  addButton?: p.Flex<typeof IconButton>;
  svg?: p.Flex<"svg">;
  rows?: p.Flex<"div">;
};

export interface DefaultListBuilderProps {
  title?: React.ReactNode;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  empty?: SingleBooleanChoiceArg<"empty">;
  hideIconButton?: SingleBooleanChoiceArg<"hideIconButton">;
  className?: string;
}

function PlasmicListBuilder__RenderFunc(props: {
  variants: PlasmicListBuilder__VariantsArgs;
  args: PlasmicListBuilder__ArgsType;
  overrides: PlasmicListBuilder__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_plasmic_kit_design_system_css.plasmic_tokens,
        plasmic_plasmic_kit_q_4_color_tokens_css.plasmic_tokens,
        sty.root
      )}
    >
      <div
        className={classNames(projectcss.all, sty.freeBox__sPoxq, {
          [sty.freeBoxempty__sPoxqHsddY]: hasVariant(
            variants,
            "empty",
            "empty"
          ),
        })}
      >
        <div
          className={classNames(projectcss.all, sty.freeBox__mexQg, {
            [sty.freeBoxempty__mexQgHsddY]: hasVariant(
              variants,
              "empty",
              "empty"
            ),

            [sty.freeBoxhideIconButton__mexQgdSMpA]: hasVariant(
              variants,
              "hideIconButton",
              "hideIconButton"
            ),
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: "Params",
            value: args.title,
            className: classNames(sty.slotTargetTitle, {
              [sty.slotTargetTitleempty]: hasVariant(
                variants,
                "empty",
                "empty"
              ),
            }),
          })}
        </div>

        {(
          hasVariant(variants, "hideIconButton", "hideIconButton")
            ? false
            : true
        ) ? (
          <IconButton
            data-plasmic-name={"addButton"}
            data-plasmic-override={overrides.addButton}
            children2={
              <ChevronDownsvgIcon
                data-plasmic-name={"svg"}
                data-plasmic-override={overrides.svg}
                className={classNames(projectcss.all, sty.svg)}
                role={"img"}
              />
            }
            className={classNames("__wab_instance", sty.addButton, {
              [sty.addButtonhideIconButton]: hasVariant(
                variants,
                "hideIconButton",
                "hideIconButton"
              ),
            })}
          >
            {p.renderPlasmicSlot({
              defaultContents: (
                <PlusIcon
                  className={classNames(projectcss.all, sty.svg__jzF9W)}
                  role={"img"}
                />
              ),

              value: args.icon,
            })}
          </IconButton>
        ) : null}
      </div>

      {(hasVariant(variants, "empty", "empty") ? false : true) ? (
        <p.Stack
          as={"div"}
          data-plasmic-name={"rows"}
          data-plasmic-override={overrides.rows}
          hasGap={true}
          className={classNames(projectcss.all, sty.rows, {
            [sty.rowsempty]: hasVariant(variants, "empty", "empty"),
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <KeyValueRow
                className={classNames(
                  "__wab_instance",
                  sty.keyValueRow___3DWwT
                )}
                icon={
                  <TrashIcon
                    className={classNames(projectcss.all, sty.svg__d3UKe)}
                    role={"img"}
                  />
                }
              />
            ),

            value: args.children,
          })}
        </p.Stack>
      ) : null}
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "addButton", "svg", "rows"],
  addButton: ["addButton", "svg"],
  svg: ["svg"],
  rows: ["rows"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  addButton: typeof IconButton;
  svg: "svg";
  rows: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicListBuilder__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> = {
  // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicListBuilder__VariantsArgs;
  args?: PlasmicListBuilder__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicListBuilder__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicListBuilder__ArgsType, ReservedPropsType> &
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
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicListBuilder__ArgProps,
      internalVariantPropNames: PlasmicListBuilder__VariantProps,
    });

    return PlasmicListBuilder__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicListBuilder";
  } else {
    func.displayName = `PlasmicListBuilder.${nodeName}`;
  }
  return func;
}

export const PlasmicListBuilder = Object.assign(
  // Top-level PlasmicListBuilder renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    addButton: makeNodeComponent("addButton"),
    svg: makeNodeComponent("svg"),
    rows: makeNodeComponent("rows"),

    // Metadata about props expected for PlasmicListBuilder
    internalVariantProps: PlasmicListBuilder__VariantProps,
    internalArgProps: PlasmicListBuilder__ArgProps,
  }
);

export default PlasmicListBuilder;
/* prettier-ignore-end */

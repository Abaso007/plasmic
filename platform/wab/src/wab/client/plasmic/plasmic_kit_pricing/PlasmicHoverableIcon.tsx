// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ehckhYnyDHgCBbV47m9bkf
// Component: 1T4UNMYLSC7u

import * as React from "react";

import {
  Flex as Flex__,
  SingleBooleanChoiceArg,
  StrictProps,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  hasVariant,
  renderPlasmicSlot,
  useCurrentUser,
  useDollarState,
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";

import ElevatedCard from "../../components/pricing/ElevatedCard"; // plasmic-import: OOKbAz_EJ7Rm/component
import Popout from "../../components/pricing/Popout"; // plasmic-import: XvpbI4g-IJWK/component
import { PricingTooltip } from "../../components/pricing/Tooltip"; // plasmic-import: eAE4YEj_YxMC/codeComponent

import { useEnvironment } from "./PlasmicGlobalVariant__Environment"; // plasmic-import: hIjF9NLAUKG-/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import plasmic_plasmic_kit_design_system_deprecated_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import projectcss from "./plasmic_plasmic_kit_pricing.module.css"; // plasmic-import: ehckhYnyDHgCBbV47m9bkf/projectcss
import sty from "./PlasmicHoverableIcon.module.css"; // plasmic-import: 1T4UNMYLSC7u/css

import InformationsvgIcon from "../plasmic_kit_icons/icons/PlasmicIcon__InformationSvg"; // plasmic-import: hqBNVBJWB/icon

createPlasmicElementProxy;

export type PlasmicHoverableIcon__VariantMembers = {
  above: "above";
  white: "white";
};
export type PlasmicHoverableIcon__VariantsArgs = {
  above?: SingleBooleanChoiceArg<"above">;
  white?: SingleBooleanChoiceArg<"white">;
};
type VariantPropType = keyof PlasmicHoverableIcon__VariantsArgs;
export const PlasmicHoverableIcon__VariantProps = new Array<VariantPropType>(
  "above",
  "white"
);

export type PlasmicHoverableIcon__ArgsType = {
  popover?: React.ReactNode;
  forceOverlay?: boolean;
};
type ArgPropType = keyof PlasmicHoverableIcon__ArgsType;
export const PlasmicHoverableIcon__ArgProps = new Array<ArgPropType>(
  "popover",
  "forceOverlay"
);

export type PlasmicHoverableIcon__OverridesType = {
  root?: Flex__<"div">;
  tooltip?: Flex__<typeof PricingTooltip>;
  svg?: Flex__<"svg">;
  popout?: Flex__<typeof Popout>;
  elevatedCard?: Flex__<typeof ElevatedCard>;
};

export interface DefaultHoverableIconProps {
  popover?: React.ReactNode;
  forceOverlay?: boolean;
  above?: SingleBooleanChoiceArg<"above">;
  white?: SingleBooleanChoiceArg<"white">;
  className?: string;
}

const $$ = {};

function PlasmicHoverableIcon__RenderFunc(props: {
  variants: PlasmicHoverableIcon__VariantsArgs;
  args: PlasmicHoverableIcon__ArgsType;
  overrides: PlasmicHoverableIcon__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          forceOverlay: false,
        },
        props.args
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

  const currentUser = useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "above",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.above,
      },
      {
        path: "white",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.white,
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

  const globalVariants = ensureGlobalVariants({
    environment: useEnvironment(),
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_plasmic_kit_design_system_deprecated_css.plasmic_tokens,
        plasmic_plasmic_kit_color_tokens_css.plasmic_tokens,
        sty.root,
        {
          [projectcss.global_environment_website]: hasVariant(
            globalVariants,
            "environment",
            "website"
          ),
          [sty.rootabove]: hasVariant($state, "above", "above"),
        }
      )}
    >
      <PricingTooltip
        data-plasmic-name={"tooltip"}
        data-plasmic-override={overrides.tooltip}
        className={classNames("__wab_instance", sty.tooltip, {
          [sty.tooltipabove]: hasVariant($state, "above", "above"),
        })}
        overlay={
          <Popout
            data-plasmic-name={"popout"}
            data-plasmic-override={overrides.popout}
            above={hasVariant($state, "above", "above") ? true : undefined}
            className={classNames("__wab_instance", sty.popout, {
              [sty.popoutabove]: hasVariant($state, "above", "above"),
            })}
            noArrow={true}
          >
            <ElevatedCard
              data-plasmic-name={"elevatedCard"}
              data-plasmic-override={overrides.elevatedCard}
              className={classNames("__wab_instance", sty.elevatedCard)}
              menuContainer2={
                <div className={classNames(projectcss.all, sty.freeBox__diuB5)}>
                  {renderPlasmicSlot({
                    defaultContents: "Some description",
                    value: args.popover,
                    className: classNames(sty.slotTargetPopover, {
                      [sty.slotTargetPopoverabove]: hasVariant(
                        $state,
                        "above",
                        "above"
                      ),
                    }),
                  })}
                </div>
              }
            />
          </Popout>
        }
        placement={hasVariant($state, "above", "above") ? "top" : undefined}
        trigger={
          <div className={classNames(projectcss.all, sty.freeBox__mdtW)}>
            <InformationsvgIcon
              data-plasmic-name={"svg"}
              data-plasmic-override={overrides.svg}
              className={classNames(projectcss.all, sty.svg, {
                [sty.svgwhite]: hasVariant($state, "white", "white"),
              })}
              role={"img"}
            />
          </div>
        }
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "tooltip", "svg", "popout", "elevatedCard"],
  tooltip: ["tooltip", "svg", "popout", "elevatedCard"],
  svg: ["svg"],
  popout: ["popout", "elevatedCard"],
  elevatedCard: ["elevatedCard"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  tooltip: typeof PricingTooltip;
  svg: "svg";
  popout: typeof Popout;
  elevatedCard: typeof ElevatedCard;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHoverableIcon__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHoverableIcon__VariantsArgs;
    args?: PlasmicHoverableIcon__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHoverableIcon__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHoverableIcon__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
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
          internalArgPropNames: PlasmicHoverableIcon__ArgProps,
          internalVariantPropNames: PlasmicHoverableIcon__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicHoverableIcon__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHoverableIcon";
  } else {
    func.displayName = `PlasmicHoverableIcon.${nodeName}`;
  }
  return func;
}

export const PlasmicHoverableIcon = Object.assign(
  // Top-level PlasmicHoverableIcon renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    tooltip: makeNodeComponent("tooltip"),
    svg: makeNodeComponent("svg"),
    popout: makeNodeComponent("popout"),
    elevatedCard: makeNodeComponent("elevatedCard"),

    // Metadata about props expected for PlasmicHoverableIcon
    internalVariantProps: PlasmicHoverableIcon__VariantProps,
    internalArgProps: PlasmicHoverableIcon__ArgProps,
  }
);

export default PlasmicHoverableIcon;
/* prettier-ignore-end */

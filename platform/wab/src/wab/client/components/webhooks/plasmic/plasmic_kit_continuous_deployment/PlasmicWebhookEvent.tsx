/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: fpbcKyXdMTvY59T4C5fjcC
// Component: MtBpr4iNob

import * as React from "react";

import {
  Flex as Flex__,
  PlasmicIcon as PlasmicIcon__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  hasVariant,
  renderPlasmicSlot,
  useDollarState,
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";

import IconButton from "../../../widgets/IconButton"; // plasmic-import: LPry-TF4j22a/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_design_system_css from "../../../../plasmic/PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import plasmic_plasmic_kit_color_tokens_css from "../../../../plasmic/plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import projectcss from "../../../modals/plasmic/plasmic_kit_project_settings/plasmic_plasmic_kit_project_settings.module.css"; // plasmic-import: fpbcKyXdMTvY59T4C5fjcC/projectcss
import sty from "./PlasmicWebhookEvent.module.css"; // plasmic-import: MtBpr4iNob/css

import ChevronDownSvgIcon from "../../../../plasmic/plasmic_kit_icons/icons/PlasmicIcon__ChevronDownSvg"; // plasmic-import: xZrB9_0ir/icon
import ChevronLeftSvgIcon from "../../../../plasmic/plasmic_kit_icons/icons/PlasmicIcon__ChevronLeftSvg"; // plasmic-import: 0-_N6JM-u/icon

createPlasmicElementProxy;

export type PlasmicWebhookEvent__VariantMembers = {
  state: "failed" | "loading";
  expanded: "expanded";
};
export type PlasmicWebhookEvent__VariantsArgs = {
  state?: SingleChoiceArg<"failed" | "loading">;
  expanded?: SingleBooleanChoiceArg<"expanded">;
};
type VariantPropType = keyof PlasmicWebhookEvent__VariantsArgs;
export const PlasmicWebhookEvent__VariantProps = new Array<VariantPropType>(
  "state",
  "expanded"
);

export type PlasmicWebhookEvent__ArgsType = {
  method?: React.ReactNode;
  url?: React.ReactNode;
  status?: React.ReactNode;
  response?: React.ReactNode;
  createdAt?: React.ReactNode;
};
type ArgPropType = keyof PlasmicWebhookEvent__ArgsType;
export const PlasmicWebhookEvent__ArgProps = new Array<ArgPropType>(
  "method",
  "url",
  "status",
  "response",
  "createdAt"
);

export type PlasmicWebhookEvent__OverridesType = {
  root?: Flex__<"div">;
  indicator?: Flex__<"div">;
  viewButton?: Flex__<typeof IconButton>;
};

export interface DefaultWebhookEventProps {
  method?: React.ReactNode;
  url?: React.ReactNode;
  status?: React.ReactNode;
  response?: React.ReactNode;
  createdAt?: React.ReactNode;
  state?: SingleChoiceArg<"failed" | "loading">;
  expanded?: SingleBooleanChoiceArg<"expanded">;
  className?: string;
}

const $$ = {};

function PlasmicWebhookEvent__RenderFunc(props: {
  variants: PlasmicWebhookEvent__VariantsArgs;
  args: PlasmicWebhookEvent__ArgsType;
  overrides: PlasmicWebhookEvent__OverridesType;
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
        path: "state",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.state,
      },
      {
        path: "expanded",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.expanded,
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
        plasmic_plasmic_kit_design_system_css.plasmic_tokens,
        plasmic_plasmic_kit_color_tokens_css.plasmic_tokens,
        sty.root,
        {
          [sty.rootexpanded]: hasVariant($state, "expanded", "expanded"),
          [sty.rootstate_failed]: hasVariant($state, "state", "failed"),
        }
      )}
    >
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__ty2Le, {
          [sty.freeBoxexpanded__ty2Le8Ak7G]: hasVariant(
            $state,
            "expanded",
            "expanded"
          ),
          [sty.freeBoxstate_failed__ty2LEv0SOg]: hasVariant(
            $state,
            "state",
            "failed"
          ),
        })}
      >
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__awMIm, {
            [sty.freeBoxstate_loading__awMIm6DxTv]: hasVariant(
              $state,
              "state",
              "loading"
            ),
          })}
        >
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__h1XF, {
              [sty.freeBoxstate_loading__h1XF6DxTv]: hasVariant(
                $state,
                "state",
                "loading"
              ),
            })}
          >
            <div
              data-plasmic-name={"indicator"}
              data-plasmic-override={overrides.indicator}
              className={classNames(projectcss.all, sty.indicator, {
                [sty.indicatorstate_failed]: hasVariant(
                  $state,
                  "state",
                  "failed"
                ),
                [sty.indicatorstate_loading]: hasVariant(
                  $state,
                  "state",
                  "loading"
                ),
              })}
            />

            {(hasVariant($state, "state", "loading") ? false : true)
              ? renderPlasmicSlot({
                  defaultContents: "200",
                  value: args.status,
                  className: classNames(sty.slotTargetStatus, {
                    [sty.slotTargetStatusstate_failed]: hasVariant(
                      $state,
                      "state",
                      "failed"
                    ),
                    [sty.slotTargetStatusstate_loading]: hasVariant(
                      $state,
                      "state",
                      "loading"
                    ),
                  }),
                })
              : null}
          </Stack__>
          <div className={classNames(projectcss.all, sty.freeBox__wnEpm)}>
            {renderPlasmicSlot({
              defaultContents: "POST",
              value: args.method,
              className: classNames(sty.slotTargetMethod),
            })}
          </div>
          <div className={classNames(projectcss.all, sty.freeBox___5UJ68)}>
            {renderPlasmicSlot({
              defaultContents: "https://plasmic.app/",
              value: args.url,
              className: classNames(sty.slotTargetUrl, {
                [sty.slotTargetUrlexpanded]: hasVariant(
                  $state,
                  "expanded",
                  "expanded"
                ),
                [sty.slotTargetUrlstate_loading]: hasVariant(
                  $state,
                  "state",
                  "loading"
                ),
              }),
            })}
          </div>
        </Stack__>
        <IconButton
          data-plasmic-name={"viewButton"}
          data-plasmic-override={overrides.viewButton}
          children2={
            <ChevronDownSvgIcon
              className={classNames(projectcss.all, sty.svg__k4Czc)}
              role={"img"}
            />
          }
          className={classNames("__wab_instance", sty.viewButton, {
            [sty.viewButtonexpanded]: hasVariant(
              $state,
              "expanded",
              "expanded"
            ),
            [sty.viewButtonstate_loading]: hasVariant(
              $state,
              "state",
              "loading"
            ),
          })}
          disabled={hasVariant($state, "state", "loading") ? true : undefined}
          size={"small"}
          type={["seamless"]}
        >
          <PlasmicIcon__
            PlasmicIconType={
              hasVariant($state, "expanded", "expanded")
                ? ChevronDownSvgIcon
                : ChevronLeftSvgIcon
            }
            className={classNames(projectcss.all, sty.svg__edv0Q, {
              [sty.svgexpanded__edv0Q8Ak7G]: hasVariant(
                $state,
                "expanded",
                "expanded"
              ),
              [sty.svgstate_failed__edv0Qv0SOg]: hasVariant(
                $state,
                "state",
                "failed"
              ),
              [sty.svgstate_loading__edv0Q6DxTv]: hasVariant(
                $state,
                "state",
                "loading"
              ),
            })}
            role={"img"}
          />
        </IconButton>
      </Stack__>
      {(hasVariant($state, "expanded", "expanded") ? true : false) ? (
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox___99Mh, {
            [sty.freeBoxexpanded___99Mh8Ak7G]: hasVariant(
              $state,
              "expanded",
              "expanded"
            ),
          })}
        >
          {renderPlasmicSlot({
            defaultContents: '{"a": "b"}',
            value: args.response,
            className: classNames(sty.slotTargetResponse, {
              [sty.slotTargetResponseexpanded]: hasVariant(
                $state,
                "expanded",
                "expanded"
              ),
            }),
          })}
          {renderPlasmicSlot({
            defaultContents: "2020-01-14 22:11:34",
            value: args.createdAt,
            className: classNames(sty.slotTargetCreatedAt, {
              [sty.slotTargetCreatedAtexpanded]: hasVariant(
                $state,
                "expanded",
                "expanded"
              ),
            }),
          })}
        </Stack__>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "indicator", "viewButton"],
  indicator: ["indicator"],
  viewButton: ["viewButton"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  indicator: "div";
  viewButton: typeof IconButton;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicWebhookEvent__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicWebhookEvent__VariantsArgs;
    args?: PlasmicWebhookEvent__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicWebhookEvent__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicWebhookEvent__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicWebhookEvent__ArgProps,
          internalVariantPropNames: PlasmicWebhookEvent__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicWebhookEvent__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicWebhookEvent";
  } else {
    func.displayName = `PlasmicWebhookEvent.${nodeName}`;
  }
  return func;
}

export const PlasmicWebhookEvent = Object.assign(
  // Top-level PlasmicWebhookEvent renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    indicator: makeNodeComponent("indicator"),
    viewButton: makeNodeComponent("viewButton"),

    // Metadata about props expected for PlasmicWebhookEvent
    internalVariantProps: PlasmicWebhookEvent__VariantProps,
    internalArgProps: PlasmicWebhookEvent__ArgProps,
  }
);

export default PlasmicWebhookEvent;
/* prettier-ignore-end */

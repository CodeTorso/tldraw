import { TLCameraOptions } from './editor/types/misc-types'
import { EASINGS } from './primitives/easings'

/** @internal */
export let MAX_SHAPES_PER_PAGE = 4000
/** @internal */
export let MAX_PAGES = 40

/** @internal */
export let ANIMATION_MEDIUM_MS = 320

/** @internal */
export const DEFAULT_CAMERA_OPTIONS: TLCameraOptions = {
	isLocked: false,
	wheelBehavior: 'pan',
	panSpeed: 1,
	zoomSpeed: 1,
	zoomSteps: [0.1, 0.25, 0.5, 1, 2, 4, 8],
}

/** @internal */
export let FOLLOW_CHASE_VIEWPORT_SNAP = 2

/** @internal */
export let DOUBLE_CLICK_DURATION = 450
/** @internal */
export let MULTI_CLICK_DURATION = 200

/** @internal */
export const COARSE_DRAG_DISTANCE = 36 // 6 squared

/** @internal */
export const DRAG_DISTANCE = 16 // 4 squared

/** @internal */
export const SVG_PADDING = 32

/** @internal */
export const DEFAULT_ANIMATION_OPTIONS = {
	duration: 0,
	easing: EASINGS.easeInOutCubic,
}

/** @internal */
export let CAMERA_SLIDE_FRICTION = 0.09

/** @internal */
export let GRID_STEPS = [
	{ min: -1, mid: 0.15, step: 64 },
	{ min: 0.05, mid: 0.375, step: 16 },
	{ min: 0.15, mid: 1, step: 4 },
	{ min: 0.7, mid: 2.5, step: 1 },
]

/** @internal */
export const COLLABORATOR_INACTIVE_TIMEOUT = 60000

/** @internal */
export const COLLABORATOR_IDLE_TIMEOUT = 3000

/** @internal */
export const COLLABORATOR_CHECK_INTERVAL = 1200

/**
 * Negative pointer ids are reserved for internal use.
 *
 * @internal */
export const INTERNAL_POINTER_IDS = {
	CAMERA_MOVE: -10,
} as const

/** @internal */
export let CAMERA_MOVING_TIMEOUT = 64

/** @public */
export let HIT_TEST_MARGIN = 8

/** @internal */
export let EDGE_SCROLL_SPEED = 20

/** @internal */
export let EDGE_SCROLL_DISTANCE = 8

/** @internal */
export let COARSE_POINTER_WIDTH = 12

/** @internal */
export let COARSE_HANDLE_RADIUS = 20

/** @internal */
export let HANDLE_RADIUS = 12

/** @public */
export const SIDES = ['top', 'right', 'bottom', 'left'] as const

/** @internal */
export let LONG_PRESS_DURATION = 500

/** @internal */
export const TEXT_SHADOW_LOD = 0.35

export const LEFT_MOUSE_BUTTON = 0
export const RIGHT_MOUSE_BUTTON = 2
export const MIDDLE_MOUSE_BUTTON = 1
export const STYLUS_ERASER_BUTTON = 5

/* ==== Auto generated setters - stuff below this point will be overwritten ==== */
/** @public */
export const DEFAULT_EDITOR_SETTINGS = {
	MAX_SHAPES_PER_PAGE,
	MAX_PAGES,
	ANIMATION_MEDIUM_MS,
	FOLLOW_CHASE_VIEWPORT_SNAP,
	DOUBLE_CLICK_DURATION,
	MULTI_CLICK_DURATION,
	CAMERA_SLIDE_FRICTION,
	GRID_STEPS,
	CAMERA_MOVING_TIMEOUT,
	HIT_TEST_MARGIN,
	EDGE_SCROLL_SPEED,
	EDGE_SCROLL_DISTANCE,
	COARSE_POINTER_WIDTH,
	COARSE_HANDLE_RADIUS,
	HANDLE_RADIUS,
	LONG_PRESS_DURATION,
} as const
/** @public */
export function getEditorSettings() {
	return {
		MAX_SHAPES_PER_PAGE,
		MAX_PAGES,
		ANIMATION_MEDIUM_MS,
		FOLLOW_CHASE_VIEWPORT_SNAP,
		DOUBLE_CLICK_DURATION,
		MULTI_CLICK_DURATION,
		CAMERA_SLIDE_FRICTION,
		GRID_STEPS,
		CAMERA_MOVING_TIMEOUT,
		HIT_TEST_MARGIN,
		EDGE_SCROLL_SPEED,
		EDGE_SCROLL_DISTANCE,
		COARSE_POINTER_WIDTH,
		COARSE_HANDLE_RADIUS,
		HANDLE_RADIUS,
		LONG_PRESS_DURATION,
	}
}
/** @public */
export function updateEditorSettings(settings: {
	MAX_SHAPES_PER_PAGE?: typeof MAX_SHAPES_PER_PAGE
	MAX_PAGES?: typeof MAX_PAGES
	ANIMATION_MEDIUM_MS?: typeof ANIMATION_MEDIUM_MS
	FOLLOW_CHASE_VIEWPORT_SNAP?: typeof FOLLOW_CHASE_VIEWPORT_SNAP
	DOUBLE_CLICK_DURATION?: typeof DOUBLE_CLICK_DURATION
	MULTI_CLICK_DURATION?: typeof MULTI_CLICK_DURATION
	CAMERA_SLIDE_FRICTION?: typeof CAMERA_SLIDE_FRICTION
	GRID_STEPS?: typeof GRID_STEPS
	CAMERA_MOVING_TIMEOUT?: typeof CAMERA_MOVING_TIMEOUT
	HIT_TEST_MARGIN?: typeof HIT_TEST_MARGIN
	EDGE_SCROLL_SPEED?: typeof EDGE_SCROLL_SPEED
	EDGE_SCROLL_DISTANCE?: typeof EDGE_SCROLL_DISTANCE
	COARSE_POINTER_WIDTH?: typeof COARSE_POINTER_WIDTH
	COARSE_HANDLE_RADIUS?: typeof COARSE_HANDLE_RADIUS
	HANDLE_RADIUS?: typeof HANDLE_RADIUS
	LONG_PRESS_DURATION?: typeof LONG_PRESS_DURATION
}) {
	if (settings.MAX_SHAPES_PER_PAGE !== undefined) {
		MAX_SHAPES_PER_PAGE = settings.MAX_SHAPES_PER_PAGE
	}
	if (settings.MAX_PAGES !== undefined) {
		MAX_PAGES = settings.MAX_PAGES
	}
	if (settings.ANIMATION_MEDIUM_MS !== undefined) {
		ANIMATION_MEDIUM_MS = settings.ANIMATION_MEDIUM_MS
	}
	if (settings.FOLLOW_CHASE_VIEWPORT_SNAP !== undefined) {
		FOLLOW_CHASE_VIEWPORT_SNAP = settings.FOLLOW_CHASE_VIEWPORT_SNAP
	}
	if (settings.DOUBLE_CLICK_DURATION !== undefined) {
		DOUBLE_CLICK_DURATION = settings.DOUBLE_CLICK_DURATION
	}
	if (settings.MULTI_CLICK_DURATION !== undefined) {
		MULTI_CLICK_DURATION = settings.MULTI_CLICK_DURATION
	}
	if (settings.CAMERA_SLIDE_FRICTION !== undefined) {
		CAMERA_SLIDE_FRICTION = settings.CAMERA_SLIDE_FRICTION
	}
	if (settings.GRID_STEPS !== undefined) {
		GRID_STEPS = settings.GRID_STEPS
	}
	if (settings.CAMERA_MOVING_TIMEOUT !== undefined) {
		CAMERA_MOVING_TIMEOUT = settings.CAMERA_MOVING_TIMEOUT
	}
	if (settings.HIT_TEST_MARGIN !== undefined) {
		HIT_TEST_MARGIN = settings.HIT_TEST_MARGIN
	}
	if (settings.EDGE_SCROLL_SPEED !== undefined) {
		EDGE_SCROLL_SPEED = settings.EDGE_SCROLL_SPEED
	}
	if (settings.EDGE_SCROLL_DISTANCE !== undefined) {
		EDGE_SCROLL_DISTANCE = settings.EDGE_SCROLL_DISTANCE
	}
	if (settings.COARSE_POINTER_WIDTH !== undefined) {
		COARSE_POINTER_WIDTH = settings.COARSE_POINTER_WIDTH
	}
	if (settings.COARSE_HANDLE_RADIUS !== undefined) {
		COARSE_HANDLE_RADIUS = settings.COARSE_HANDLE_RADIUS
	}
	if (settings.HANDLE_RADIUS !== undefined) {
		HANDLE_RADIUS = settings.HANDLE_RADIUS
	}
	if (settings.LONG_PRESS_DURATION !== undefined) {
		LONG_PRESS_DURATION = settings.LONG_PRESS_DURATION
	}
}

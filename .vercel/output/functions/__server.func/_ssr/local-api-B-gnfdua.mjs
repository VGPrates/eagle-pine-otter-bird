import "../_runtime.mjs";
import { _ as Slot, b as require_react, y as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { a as TSS_SERVER_FUNCTION, i as createServerFn, o as getServerFnById } from "./server-By5vJHXH.mjs";
import { t as authMiddleware } from "./middleware-ruSq5Gh7.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
require_react();
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-[background-color,color,box-shadow,transform,opacity] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/70 disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:not-disabled:scale-[0.96]", {
	variants: {
		variant: {
			default: "bg-primary text-primary-fg shadow-border hover:bg-primary/90",
			outline: "bg-transparent text-fg shadow-border hover:bg-elevated hover:shadow-border-hover",
			ghost: "bg-transparent text-fg hover:bg-elevated",
			secondary: "bg-elevated text-fg shadow-border hover:bg-elevated/80",
			destructive: "bg-hp text-fg hover:bg-hp/90"
		},
		size: {
			default: "h-11 rounded-md px-4",
			sm: "h-9 rounded-sm px-3 text-sm",
			lg: "h-12 rounded-lg px-6",
			icon: "size-11 rounded-md"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var getMyStateFn = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(createSsrRpc("6fc6696ba4309fbf69b684cbf99f779221a8b203d8d73753d21dcf957cac53c2"));
var getLibraryFn = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(createSsrRpc("211d2ad9927257359b978f86d05512cc0ed29db05a0856bba7f8c3f8b8f8cc0c"));
var chooseRoleFn = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((data) => data).handler(createSsrRpc("95e2be8eb087b862f6eea04721ba42920bc7957faac233656d701bc2d4faa424"));
var gmUpdateIdentityFn = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((data) => data).handler(createSsrRpc("56a9080615ec0a224b247d0d00316f99beac1957be5a3043cfcc7f81faf148f6"));
var updateNotesFn = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((data) => data).handler(createSsrRpc("3ffd89aea2fb616605b56abd6ae699418da59faca4d167ff5d3f799cd2100018"));
var updateMyAvatarFn = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((data) => data).handler(createSsrRpc("747811d91acd7e33f4da7dad084c1175eee898bf3342b3a799ccdb317eb8ba25"));
var spendPointsFn = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((data) => data).handler(createSsrRpc("2c1b4ee17b1452189036e3a078e3d4128d3e71f0dc5eff1c369c689e281a1608"));
var gmSetStatsFn = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((data) => data).handler(createSsrRpc("53195d4f057384b02e20715b380c65477ba0bc373153e667d9013dfc526d117b"));
var gmGrantPointsFn = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((data) => data).handler(createSsrRpc("aa34c0bb92e2a75af1380b24aa5b26e52d0bbd270c2b9a3163899c752219f4a5"));
var gmUpdateVitalsFn = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((data) => data).handler(createSsrRpc("2bfbcab99b3a89ed89fe4b714218458868458c9cb30aebf091b9d4bd7846544b"));
var gmCreateCharacterFn = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((data) => data).handler(createSsrRpc("a276c592d5997df515f66e341a13b337b27b57212c6228ffb05fdcfb89260d4b"));
var gmDeleteCharacterFn = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((data) => data).handler(createSsrRpc("40e8a4da446a36f907f4269bd69c2e933589cfd548aa6bcffc466da1801814a7"));
var addItemFn = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((data) => data).handler(createSsrRpc("82b2a75a6a179be3e0de1483f8360c8a520c3a758373f2e9545bd9040efe4a1c"));
var removeItemFn = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((data) => data).handler(createSsrRpc("d64974e1bc71e3799944bd15f8c35abccc2320237fdd8fe216be494edbfab2ad"));
var equipItemFn = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((data) => data).handler(createSsrRpc("b44095c505d840eae848726ae1043144aca4434284a1d49412f7351534f386c2"));
var unequipItemFn = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((data) => data).handler(createSsrRpc("ff4a9984fbd9c9c73193a26f89021c139a44477e040c58db8a9fb2f419fbc7a7"));
var gmGiveEquipmentFn = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((data) => data).handler(createSsrRpc("0d50d9312372c13f9c5714335e24726ec742635971ec49b732a1477123a6df90"));
var saveLibraryEntryFn = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((data) => data).handler(createSsrRpc("8c07465a4c0aef9efe90bdaf99d30a6f975dcf832f2daade233bbfb2816bef13"));
var deleteLibraryEntryFn = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((data) => data).handler(createSsrRpc("c0011c68084c507c63b043a51fd68fd5113feb1ff792eb09b140cc845616dc58"));
var applyEffectFn = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((data) => data).handler(createSsrRpc("0e3bba770982691d6199fd796a6f743dc02be30feac7d5ac91ba9f166871b932"));
var removeAppliedEffectFn = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((data) => data).handler(createSsrRpc("4bd708151d9f46cf0043f88191c23b714f519acdab2bfc3f7a271ca2b25b596e"));
var applyConditionFn = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((data) => data).handler(createSsrRpc("59df7d4627bb610bff03028ead2fe787848194a9786eb28f645304eba1ca0a83"));
var removeAppliedConditionFn = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((data) => data).handler(createSsrRpc("ebe5f162eb192021332b28aad892403b37e65de78d2bbfca099cd0f75fa2cbce"));
var rollD20Fn = createServerFn({ method: "POST" }).middleware([authMiddleware]).handler(createSsrRpc("a7038de190bb11433c31aafe71c07a4a82e7e9260fca24b102a9d0bdad6d4b1c"));
var recentRollsFn = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(createSsrRpc("f79f121cd44a8042764017ef18f3aad6565688991f3b60d8d2e3543d732dc050"));
var requestPasswordResetFn = createServerFn({ method: "POST" }).validator((data) => ({ email: data.email.trim().toLowerCase() })).handler(createSsrRpc("0f94c46d53e9112def90d1eb24fae480acef9f7af0c1a53d0dc154cb7c1fe6a6"));
async function getMyState() {
	return getMyStateFn();
}
async function getLibrary() {
	return getLibraryFn();
}
async function chooseRole(role, displayName, character, inviteCode) {
	return chooseRoleFn({ data: {
		role,
		displayName,
		character,
		inviteCode
	} });
}
async function gmUpdateIdentity(characterId, d) {
	return gmUpdateIdentityFn({ data: {
		characterId,
		draft: d
	} });
}
async function updateNotes(characterId, notes) {
	return updateNotesFn({ data: {
		characterId,
		notes
	} });
}
async function updateMyAvatar(avatar) {
	return updateMyAvatarFn({ data: { avatar } });
}
async function spendPoints(characterId, alloc) {
	return spendPointsFn({ data: {
		characterId,
		alloc
	} });
}
async function gmSetStats(characterId, s) {
	return gmSetStatsFn({ data: {
		characterId,
		stats: s
	} });
}
async function gmGrantPoints(characterId, amount) {
	return gmGrantPointsFn({ data: {
		characterId,
		amount
	} });
}
async function gmUpdateVitals(characterId, v) {
	return gmUpdateVitalsFn({ data: {
		characterId,
		vitals: v
	} });
}
async function gmCreateCharacter(d) {
	return gmCreateCharacterFn({ data: d });
}
async function gmDeleteCharacter(characterId) {
	return gmDeleteCharacterFn({ data: { characterId } });
}
async function addItem(characterId, item) {
	return addItemFn({ data: {
		characterId,
		item
	} });
}
async function removeItem(itemId) {
	return removeItemFn({ data: { itemId } });
}
async function equipItem(itemId, slot) {
	return equipItemFn({ data: {
		itemId,
		slot
	} });
}
async function unequipItem(itemId) {
	return unequipItemFn({ data: { itemId } });
}
async function gmGiveEquipment(characterId, equipmentId) {
	return gmGiveEquipmentFn({ data: {
		characterId,
		equipmentId
	} });
}
async function saveLibraryEntry(table, id, values) {
	return saveLibraryEntryFn({ data: {
		table,
		id,
		values
	} });
}
async function deleteLibraryEntry(table, id) {
	return deleteLibraryEntryFn({ data: {
		table,
		id
	} });
}
async function applyEffect(characterId, effectId, duration) {
	return applyEffectFn({ data: {
		characterId,
		effectId,
		duration
	} });
}
async function removeAppliedEffect(id) {
	return removeAppliedEffectFn({ data: { id } });
}
async function applyCondition(characterId, conditionId, duration) {
	return applyConditionFn({ data: {
		characterId,
		conditionId,
		duration
	} });
}
async function removeAppliedCondition(id) {
	return removeAppliedConditionFn({ data: { id } });
}
async function rollD20() {
	return rollD20Fn();
}
async function recentRolls() {
	return recentRollsFn();
}
async function requestPasswordReset(email) {
	return requestPasswordResetFn({ data: { email } });
}
//#endregion
export { requestPasswordReset as C, unequipItem as D, spendPoints as E, updateMyAvatar as O, removeItem as S, saveLibraryEntry as T, gmUpdateIdentity as _, buttonVariants as a, removeAppliedCondition as b, deleteLibraryEntry as c, getMyState as d, gmCreateCharacter as f, gmSetStats as g, gmGrantPoints as h, applyEffect as i, updateNotes as k, equipItem as l, gmGiveEquipment as m, addItem as n, chooseRole as o, gmDeleteCharacter as p, applyCondition as r, cn as s, Button as t, getLibrary as u, gmUpdateVitals as v, rollD20 as w, removeAppliedEffect as x, recentRolls as y };

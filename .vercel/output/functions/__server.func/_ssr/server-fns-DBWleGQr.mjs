import { a as TSS_SERVER_FUNCTION, i as createServerFn } from "./server-By5vJHXH.mjs";
import { t as authMiddleware } from "./middleware-ruSq5Gh7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/server-fns-DBWleGQr.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var getMyStateFn_createServerFn_handler = createServerRpc({
	id: "6fc6696ba4309fbf69b684cbf99f779221a8b203d8d73753d21dcf957cac53c2",
	name: "getMyStateFn",
	filename: "src/lib/rpg/server-fns.ts"
}, (opts) => getMyStateFn.__executeServer(opts));
var getMyStateFn = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(getMyStateFn_createServerFn_handler, async ({ context }) => {
	return (await import("./store.server-BsW4Slsp.mjs")).getMyState(context.userId);
});
var getLibraryFn_createServerFn_handler = createServerRpc({
	id: "211d2ad9927257359b978f86d05512cc0ed29db05a0856bba7f8c3f8b8f8cc0c",
	name: "getLibraryFn",
	filename: "src/lib/rpg/server-fns.ts"
}, (opts) => getLibraryFn.__executeServer(opts));
var getLibraryFn = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(getLibraryFn_createServerFn_handler, async () => {
	return (await import("./store.server-BsW4Slsp.mjs")).getLibrary();
});
var chooseRoleFn_createServerFn_handler = createServerRpc({
	id: "95e2be8eb087b862f6eea04721ba42920bc7957faac233656d701bc2d4faa424",
	name: "chooseRoleFn",
	filename: "src/lib/rpg/server-fns.ts"
}, (opts) => chooseRoleFn.__executeServer(opts));
var chooseRoleFn = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((data) => data).handler(chooseRoleFn_createServerFn_handler, async ({ context, data }) => {
	return (await import("./store.server-BsW4Slsp.mjs")).chooseRoleForUser(context.userId, data);
});
var gmUpdateIdentityFn_createServerFn_handler = createServerRpc({
	id: "56a9080615ec0a224b247d0d00316f99beac1957be5a3043cfcc7f81faf148f6",
	name: "gmUpdateIdentityFn",
	filename: "src/lib/rpg/server-fns.ts"
}, (opts) => gmUpdateIdentityFn.__executeServer(opts));
var gmUpdateIdentityFn = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((data) => data).handler(gmUpdateIdentityFn_createServerFn_handler, async ({ context, data }) => {
	return (await import("./store.server-BsW4Slsp.mjs")).gmUpdateIdentity(context.userId, data.characterId, data.draft);
});
var updateNotesFn_createServerFn_handler = createServerRpc({
	id: "3ffd89aea2fb616605b56abd6ae699418da59faca4d167ff5d3f799cd2100018",
	name: "updateNotesFn",
	filename: "src/lib/rpg/server-fns.ts"
}, (opts) => updateNotesFn.__executeServer(opts));
var updateNotesFn = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((data) => data).handler(updateNotesFn_createServerFn_handler, async ({ context, data }) => {
	return (await import("./store.server-BsW4Slsp.mjs")).updateNotes(context.userId, data.characterId, data.notes);
});
var updateMyAvatarFn_createServerFn_handler = createServerRpc({
	id: "747811d91acd7e33f4da7dad084c1175eee898bf3342b3a799ccdb317eb8ba25",
	name: "updateMyAvatarFn",
	filename: "src/lib/rpg/server-fns.ts"
}, (opts) => updateMyAvatarFn.__executeServer(opts));
var updateMyAvatarFn = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((data) => data).handler(updateMyAvatarFn_createServerFn_handler, async ({ context, data }) => {
	return (await import("./store.server-BsW4Slsp.mjs")).updateMyAvatar(context.userId, data.avatar);
});
var spendPointsFn_createServerFn_handler = createServerRpc({
	id: "2c1b4ee17b1452189036e3a078e3d4128d3e71f0dc5eff1c369c689e281a1608",
	name: "spendPointsFn",
	filename: "src/lib/rpg/server-fns.ts"
}, (opts) => spendPointsFn.__executeServer(opts));
var spendPointsFn = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((data) => data).handler(spendPointsFn_createServerFn_handler, async ({ context, data }) => {
	return (await import("./store.server-BsW4Slsp.mjs")).spendPoints(context.userId, data.characterId, data.alloc);
});
var gmSetStatsFn_createServerFn_handler = createServerRpc({
	id: "53195d4f057384b02e20715b380c65477ba0bc373153e667d9013dfc526d117b",
	name: "gmSetStatsFn",
	filename: "src/lib/rpg/server-fns.ts"
}, (opts) => gmSetStatsFn.__executeServer(opts));
var gmSetStatsFn = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((data) => data).handler(gmSetStatsFn_createServerFn_handler, async ({ context, data }) => {
	return (await import("./store.server-BsW4Slsp.mjs")).gmSetStats(context.userId, data.characterId, data.stats);
});
var gmGrantPointsFn_createServerFn_handler = createServerRpc({
	id: "aa34c0bb92e2a75af1380b24aa5b26e52d0bbd270c2b9a3163899c752219f4a5",
	name: "gmGrantPointsFn",
	filename: "src/lib/rpg/server-fns.ts"
}, (opts) => gmGrantPointsFn.__executeServer(opts));
var gmGrantPointsFn = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((data) => data).handler(gmGrantPointsFn_createServerFn_handler, async ({ context, data }) => {
	return (await import("./store.server-BsW4Slsp.mjs")).gmGrantPoints(context.userId, data.characterId, data.amount);
});
var gmUpdateVitalsFn_createServerFn_handler = createServerRpc({
	id: "2bfbcab99b3a89ed89fe4b714218458868458c9cb30aebf091b9d4bd7846544b",
	name: "gmUpdateVitalsFn",
	filename: "src/lib/rpg/server-fns.ts"
}, (opts) => gmUpdateVitalsFn.__executeServer(opts));
var gmUpdateVitalsFn = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((data) => data).handler(gmUpdateVitalsFn_createServerFn_handler, async ({ context, data }) => {
	return (await import("./store.server-BsW4Slsp.mjs")).gmUpdateVitals(context.userId, data.characterId, data.vitals);
});
var gmCreateCharacterFn_createServerFn_handler = createServerRpc({
	id: "a276c592d5997df515f66e341a13b337b27b57212c6228ffb05fdcfb89260d4b",
	name: "gmCreateCharacterFn",
	filename: "src/lib/rpg/server-fns.ts"
}, (opts) => gmCreateCharacterFn.__executeServer(opts));
var gmCreateCharacterFn = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((data) => data).handler(gmCreateCharacterFn_createServerFn_handler, async ({ context, data }) => {
	return (await import("./store.server-BsW4Slsp.mjs")).gmCreateCharacter(context.userId, data);
});
var gmDeleteCharacterFn_createServerFn_handler = createServerRpc({
	id: "40e8a4da446a36f907f4269bd69c2e933589cfd548aa6bcffc466da1801814a7",
	name: "gmDeleteCharacterFn",
	filename: "src/lib/rpg/server-fns.ts"
}, (opts) => gmDeleteCharacterFn.__executeServer(opts));
var gmDeleteCharacterFn = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((data) => data).handler(gmDeleteCharacterFn_createServerFn_handler, async ({ context, data }) => {
	return (await import("./store.server-BsW4Slsp.mjs")).gmDeleteCharacter(context.userId, data.characterId);
});
var addItemFn_createServerFn_handler = createServerRpc({
	id: "82b2a75a6a179be3e0de1483f8360c8a520c3a758373f2e9545bd9040efe4a1c",
	name: "addItemFn",
	filename: "src/lib/rpg/server-fns.ts"
}, (opts) => addItemFn.__executeServer(opts));
var addItemFn = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((data) => data).handler(addItemFn_createServerFn_handler, async ({ context, data }) => {
	return (await import("./store.server-BsW4Slsp.mjs")).addItem(context.userId, data.characterId, data.item);
});
var removeItemFn_createServerFn_handler = createServerRpc({
	id: "d64974e1bc71e3799944bd15f8c35abccc2320237fdd8fe216be494edbfab2ad",
	name: "removeItemFn",
	filename: "src/lib/rpg/server-fns.ts"
}, (opts) => removeItemFn.__executeServer(opts));
var removeItemFn = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((data) => data).handler(removeItemFn_createServerFn_handler, async ({ context, data }) => {
	return (await import("./store.server-BsW4Slsp.mjs")).removeItem(context.userId, data.itemId);
});
var equipItemFn_createServerFn_handler = createServerRpc({
	id: "b44095c505d840eae848726ae1043144aca4434284a1d49412f7351534f386c2",
	name: "equipItemFn",
	filename: "src/lib/rpg/server-fns.ts"
}, (opts) => equipItemFn.__executeServer(opts));
var equipItemFn = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((data) => data).handler(equipItemFn_createServerFn_handler, async ({ context, data }) => {
	return (await import("./store.server-BsW4Slsp.mjs")).equipItem(context.userId, data.itemId, data.slot);
});
var unequipItemFn_createServerFn_handler = createServerRpc({
	id: "ff4a9984fbd9c9c73193a26f89021c139a44477e040c58db8a9fb2f419fbc7a7",
	name: "unequipItemFn",
	filename: "src/lib/rpg/server-fns.ts"
}, (opts) => unequipItemFn.__executeServer(opts));
var unequipItemFn = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((data) => data).handler(unequipItemFn_createServerFn_handler, async ({ context, data }) => {
	return (await import("./store.server-BsW4Slsp.mjs")).unequipItem(context.userId, data.itemId);
});
var gmGiveEquipmentFn_createServerFn_handler = createServerRpc({
	id: "0d50d9312372c13f9c5714335e24726ec742635971ec49b732a1477123a6df90",
	name: "gmGiveEquipmentFn",
	filename: "src/lib/rpg/server-fns.ts"
}, (opts) => gmGiveEquipmentFn.__executeServer(opts));
var gmGiveEquipmentFn = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((data) => data).handler(gmGiveEquipmentFn_createServerFn_handler, async ({ context, data }) => {
	return (await import("./store.server-BsW4Slsp.mjs")).gmGiveEquipment(context.userId, data.characterId, data.equipmentId);
});
var saveLibraryEntryFn_createServerFn_handler = createServerRpc({
	id: "8c07465a4c0aef9efe90bdaf99d30a6f975dcf832f2daade233bbfb2816bef13",
	name: "saveLibraryEntryFn",
	filename: "src/lib/rpg/server-fns.ts"
}, (opts) => saveLibraryEntryFn.__executeServer(opts));
var saveLibraryEntryFn = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((data) => data).handler(saveLibraryEntryFn_createServerFn_handler, async ({ context, data }) => {
	return (await import("./store.server-BsW4Slsp.mjs")).saveLibraryEntry(context.userId, data.table, data.id, data.values);
});
var deleteLibraryEntryFn_createServerFn_handler = createServerRpc({
	id: "c0011c68084c507c63b043a51fd68fd5113feb1ff792eb09b140cc845616dc58",
	name: "deleteLibraryEntryFn",
	filename: "src/lib/rpg/server-fns.ts"
}, (opts) => deleteLibraryEntryFn.__executeServer(opts));
var deleteLibraryEntryFn = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((data) => data).handler(deleteLibraryEntryFn_createServerFn_handler, async ({ context, data }) => {
	return (await import("./store.server-BsW4Slsp.mjs")).deleteLibraryEntry(context.userId, data.table, data.id);
});
var applyEffectFn_createServerFn_handler = createServerRpc({
	id: "0e3bba770982691d6199fd796a6f743dc02be30feac7d5ac91ba9f166871b932",
	name: "applyEffectFn",
	filename: "src/lib/rpg/server-fns.ts"
}, (opts) => applyEffectFn.__executeServer(opts));
var applyEffectFn = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((data) => data).handler(applyEffectFn_createServerFn_handler, async ({ context, data }) => {
	return (await import("./store.server-BsW4Slsp.mjs")).applyEffect(context.userId, data.characterId, data.effectId, data.duration);
});
var removeAppliedEffectFn_createServerFn_handler = createServerRpc({
	id: "4bd708151d9f46cf0043f88191c23b714f519acdab2bfc3f7a271ca2b25b596e",
	name: "removeAppliedEffectFn",
	filename: "src/lib/rpg/server-fns.ts"
}, (opts) => removeAppliedEffectFn.__executeServer(opts));
var removeAppliedEffectFn = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((data) => data).handler(removeAppliedEffectFn_createServerFn_handler, async ({ context, data }) => {
	return (await import("./store.server-BsW4Slsp.mjs")).removeAppliedEffect(context.userId, data.id);
});
var applyConditionFn_createServerFn_handler = createServerRpc({
	id: "59df7d4627bb610bff03028ead2fe787848194a9786eb28f645304eba1ca0a83",
	name: "applyConditionFn",
	filename: "src/lib/rpg/server-fns.ts"
}, (opts) => applyConditionFn.__executeServer(opts));
var applyConditionFn = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((data) => data).handler(applyConditionFn_createServerFn_handler, async ({ context, data }) => {
	return (await import("./store.server-BsW4Slsp.mjs")).applyCondition(context.userId, data.characterId, data.conditionId, data.duration);
});
var removeAppliedConditionFn_createServerFn_handler = createServerRpc({
	id: "ebe5f162eb192021332b28aad892403b37e65de78d2bbfca099cd0f75fa2cbce",
	name: "removeAppliedConditionFn",
	filename: "src/lib/rpg/server-fns.ts"
}, (opts) => removeAppliedConditionFn.__executeServer(opts));
var removeAppliedConditionFn = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((data) => data).handler(removeAppliedConditionFn_createServerFn_handler, async ({ context, data }) => {
	return (await import("./store.server-BsW4Slsp.mjs")).removeAppliedCondition(context.userId, data.id);
});
var rollD20Fn_createServerFn_handler = createServerRpc({
	id: "a7038de190bb11433c31aafe71c07a4a82e7e9260fca24b102a9d0bdad6d4b1c",
	name: "rollD20Fn",
	filename: "src/lib/rpg/server-fns.ts"
}, (opts) => rollD20Fn.__executeServer(opts));
var rollD20Fn = createServerFn({ method: "POST" }).middleware([authMiddleware]).handler(rollD20Fn_createServerFn_handler, async ({ context }) => {
	return (await import("./store.server-BsW4Slsp.mjs")).rollD20(context.userId);
});
var recentRollsFn_createServerFn_handler = createServerRpc({
	id: "f79f121cd44a8042764017ef18f3aad6565688991f3b60d8d2e3543d732dc050",
	name: "recentRollsFn",
	filename: "src/lib/rpg/server-fns.ts"
}, (opts) => recentRollsFn.__executeServer(opts));
var recentRollsFn = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(recentRollsFn_createServerFn_handler, async ({ context }) => {
	return (await import("./store.server-BsW4Slsp.mjs")).recentRolls(context.userId);
});
var requestPasswordResetFn_createServerFn_handler = createServerRpc({
	id: "0f94c46d53e9112def90d1eb24fae480acef9f7af0c1a53d0dc154cb7c1fe6a6",
	name: "requestPasswordResetFn",
	filename: "src/lib/rpg/server-fns.ts"
}, (opts) => requestPasswordResetFn.__executeServer(opts));
var requestPasswordResetFn = createServerFn({ method: "POST" }).validator((data) => ({ email: data.email.trim().toLowerCase() })).handler(requestPasswordResetFn_createServerFn_handler, async ({ data }) => {
	return (await import("./store.server-BsW4Slsp.mjs")).requestPasswordReset(data.email);
});
//#endregion
export { addItemFn_createServerFn_handler, applyConditionFn_createServerFn_handler, applyEffectFn_createServerFn_handler, chooseRoleFn_createServerFn_handler, deleteLibraryEntryFn_createServerFn_handler, equipItemFn_createServerFn_handler, getLibraryFn_createServerFn_handler, getMyStateFn_createServerFn_handler, gmCreateCharacterFn_createServerFn_handler, gmDeleteCharacterFn_createServerFn_handler, gmGiveEquipmentFn_createServerFn_handler, gmGrantPointsFn_createServerFn_handler, gmSetStatsFn_createServerFn_handler, gmUpdateIdentityFn_createServerFn_handler, gmUpdateVitalsFn_createServerFn_handler, recentRollsFn_createServerFn_handler, removeAppliedConditionFn_createServerFn_handler, removeAppliedEffectFn_createServerFn_handler, removeItemFn_createServerFn_handler, requestPasswordResetFn_createServerFn_handler, rollD20Fn_createServerFn_handler, saveLibraryEntryFn_createServerFn_handler, spendPointsFn_createServerFn_handler, unequipItemFn_createServerFn_handler, updateMyAvatarFn_createServerFn_handler, updateNotesFn_createServerFn_handler };

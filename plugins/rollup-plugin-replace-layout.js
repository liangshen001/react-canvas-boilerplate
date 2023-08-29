export default function rollupPluginReplaceLayout() {
	return {
		//插件名
		name: 'rollup-plugin-replace-layout',
		transform(code, id) {
			// 将代码转换为 UTF-8 编码
			code = code.toString('utf-8');
			console.log(code.substring(0, 100));
			return code.replaceAll('require("minigame-canvas-engine")', 'requirePlugin("Layout").default')
				.replaceAll('import e from"minigame-canvas-engine"', 'const e=requirePlugin("Layout").default');
		}
	};
}

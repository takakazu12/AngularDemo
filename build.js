const { execSync } = require('child_process');
const path = require('path');

// 環境変数をクリア
delete process.env.NODE_OPTIONS;

// コマンドライン引数を取得
const args = process.argv.slice(2);
const baseHrefArg = args.find(arg => arg.startsWith('--base-href='));

// クロスプラットフォーム対応のパス
const ngPath = path.join('node_modules', '.bin', 'ng');

try {
  // Angular CLIを直接実行
  const command = `"${ngPath}" build ${baseHrefArg || ''}`;
  console.log(`実行コマンド: ${command}`);
  execSync(command, { stdio: 'inherit' });
  console.log('ビルド成功！');
} catch (error) {
  console.error('ビルドエラー:', error);
  process.exit(1);
}

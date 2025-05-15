import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringUtilService {
  /**
   * 文字列が全角のみかチェック
   * @param value チェックする文字列
   * @returns 全角のみならtrue、半角が含まれていればfalse
   */
  isFullOnly(value: string): boolean {
    // 半角文字が含まれていないかチェック
    return !/[\x20-\x7E]/.test(value);
  }
}

import { Component } from '@angular/core';
import { ContractInfo, Params } from '../models/contract-info.model';
import { StringUtilService } from '../services/string-util.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  contractInfo: ContractInfo = {
    agent: ''
  };
  
  subNo = '12345';
  lastUpdate = new Date().toISOString();
  enableSaveButton = true;
  resultMessage = '';
  errorMessage = '';

  constructor(private stringUtil: StringUtilService) {}

  async save(target: number): Promise<void> {
    let errCnt = 0;
    this.resultMessage = '';
    this.errorMessage = '';

    // 入力チェック
    if (!this.checkField()) {
      errCnt++;
    }

    if (errCnt > 0) {
      alert('バリデーションエラー: 半角文字が含まれています');
      return;
    }

    // API呼出 (テーブル更新)
    console.log('保存処理が実行されました');
    console.log('入力値:', this.contractInfo.agent);
    
    // 実際の環境では、ここでAPIを呼び出して保存処理を行います
    const updateRes = await this.updateInfo(true);
    
    if (updateRes) {
      this.resultMessage = '保存が完了しました。';
    }
  }

  async updateInfo(checkStatus: boolean): Promise<boolean> {
    // 実際の環境では、ここでAPIを呼び出して情報を更新します
    const infoData: Params = {
      agent_entry_field: this.contractInfo.agent
    };
    
    console.log('更新データ:', infoData);
    return true;
  }

  checkField(): boolean {
    const value = this.contractInfo.agent ?? '';
    const isValid = this.stringUtil.isFullOnly(value);
    this.enableSaveButton = isValid;
    
    if (!isValid) {
      this.errorMessage = 'バリデーションエラー: 半角文字が含まれています';
    } else {
      this.errorMessage = '';
    }
    
    return isValid;
  }
}

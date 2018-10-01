import { SelectItem } from "primeng/primeng";

export class Utils {

  static numberToArray(length: number): number[] {
    return Array(length).fill(0)
  }

  static trimModel(input: HTMLInputElement): void {
    input.value = input.value.trim();
  }

  /**
   * Generate options array for PrimeNg dropdown
   * @param  {any[]} options
   * @param  {string} labelProp
   * @param  {string} valueProp
   * @returns SelectItem[]
   */
  static generateSelectOptions(options: any[], labelProp: string, valueProp: string ): SelectItem[] {
    let primeOptions: SelectItem[] = [];

    options.forEach(option => {
      primeOptions.push({
        label: option[labelProp],
        value: option[valueProp]
      })
    })

    return primeOptions
  }
}

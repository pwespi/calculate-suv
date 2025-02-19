/**
 * Javascript object with patient properties size, sez, weight
 *
 * @export
 * @interface SUVbsaScalingFactorInput
 */
export interface SUVbsaScalingFactorInput {
  PatientSize: number;
  PatientWeight: number;
}

export default function calculateSUVbsaScalingFactor(
  inputs: SUVbsaScalingFactorInput
): number {
  const { PatientWeight, PatientSize } = inputs;

  let BSA =
    Math.pow(PatientWeight, 0.425) * Math.pow(PatientSize * 100, 0.725) * 71.84;

  return BSA;
}

export { calculateSUVbsaScalingFactor };

import { Button as BaseButton, ButtonText } from "@gluestack-ui/themed";

export default function Table() {
  return (
    <BaseButton size="md" action="primary" variant="solid" className="px-4">
      <ButtonText>Table Temporary</ButtonText>
    </BaseButton>
  );
}

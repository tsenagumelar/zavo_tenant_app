import { Button as BaseButton, ButtonText } from "@gluestack-ui/themed";

export default function Button() {
  return (
    <BaseButton size="md" action="primary" variant="solid" className="px-4">
      <ButtonText>Button Text</ButtonText>
    </BaseButton>
  );
}

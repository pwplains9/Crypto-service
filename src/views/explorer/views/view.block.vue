<script setup>
import {
  ElementBlock,
  ElementFieldInline,
  ElementValidator,
} from '~/components/element'
</script>

<template>
  <div class="vblock">
    <element-block class="vblock__block" title="Information about the block">
      <element-field-inline
        class="vblock__field"
        name="Height"
        value="11321706" />
      <element-field-inline
        class="vblock__field"
        name="Timestamp"
        value="17 sec ago" />
      <element-field-inline
        class="vblock__field"
        name="Hash"
        value="F9E0FE9C98409FDE53142FAEED" />
      <element-field-inline
        class="vblock__field"
        value-variant="gradient"
        name="Creator"
        value="Main Node" />
      <element-field-inline
        class="vblock__field"
        name="Size"
        value="5167 bytes" />
      <element-field-inline
        class="vblock__field"
        name="Issue"
        value="DEL 396.00000000" />
      <element-field-inline class="vblock__field" name="Award" value="-" />
      <element-field-inline
        class="vblock__field"
        name="Transactions"
        value="0" />
      <element-field-inline
        class="vblock__field"
        name="Validators"
        value="45" />
    </element-block>
    <element-block title="Validators">
      <div class="vblock__inline">
        <p class="vblock__val">Validator</p>
        <p class="vblock__val">Signature</p>
      </div>
      <div class="vblock__validators">
        <div class="validator">
          <element-validator
            logo="/assets/validators/1.png"
            hash="45sd3...4570" />
          <p class="validator__state">Signed</p>
        </div>
        <div class="validator">
          <element-validator
            logo="/assets/validators/1.png"
            hash="45sd3...4570" />
          <p class="validator__state">Signed</p>
        </div>
        <div class="validator">
          <element-validator
            logo="/assets/validators/1.png"
            hash="45sd3...4570" />
          <p class="validator__state">Signed</p>
        </div>
        <div class="validator">
          <element-validator
            logo="/assets/validators/1.png"
            hash="45sd3...4570" />
          <p class="validator__state">Signed</p>
        </div>
        <div class="validator">
          <element-validator
            logo="/assets/validators/1.png"
            hash="45sd3...4570" />
          <p class="validator__state">Signed</p>
        </div>
        <div class="validator">
          <element-validator
            logo="/assets/validators/1.png"
            hash="45sd3...4570" />
          <p class="validator__state">Signed</p>
        </div>
      </div>
    </element-block>
  </div>
</template>

<style scoped lang="scss">
.validator {
  display: flex;
  align-items: center;
  justify-content: space-between;
  &__state {
    color: $green;
    @include tg-14-medium;
  }
  &:not(:last-child) {
    margin-bottom: 0.8rem;
  }
}
.vblock {
  margin-top: 2.4rem;
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 0 2.4rem;
  &__field {
    &:not(:last-child) {
      margin-bottom: 1.2rem;
    }
  }
  &__inline {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__val {
    @include tg-14-reg;
    opacity: 0.6;
  }
  &__validators {
    margin-top: 1.8rem;
  }
}
</style>

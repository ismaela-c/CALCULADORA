describe('Calculadora', () => {
  
    it('Deve somar 8 + 3', async () => {
    await $('~8').click();
    await $('~plus').click();
    await $('~3').click();
    await $('~equals').click();

    await expect(
      $('id=com.google.android.calculator:id/result_final')
    ).toHaveText('11');
  });

  it('Deve subtrair 8 - 3', async () => {
    await $('~8').click();
    await $('~minus').click();
    await $('~3').click();
    await $('~equals').click();

    await expect(
      $('id=com.google.android.calculator:id/result_final')
    ).toHaveText('5');
  });

  it('Deve multiplicar 8 - 3', async () => {
    await $('~8').click();
    await $('~multiply').click();
    await $('~3').click();
    await $('~equals').click();

    await expect(
      $('id=com.google.android.calculator:id/result_final')
    ).toHaveText('24');
  });

  it('Deve dividir 8 - 3', async () => {
    await $('~8').click();
    await $('~divide').click();
    await $('~3').click();
    await $('~equals').click();

    await expect(
      $('id=com.google.android.calculator:id/result_final')
    ).toHaveText('2.66666666666666666');
  });
});
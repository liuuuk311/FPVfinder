<script>
    import PayPalDonateButton from '../../compontents/support/PayPalDonateButton.svelte';
	import BuyMeACoffeeButton from '../../compontents/support/BuyMeACoffeeButton.svelte';
	import CopyCryptoAddress from '../../compontents/support/CopyCryptoAddress.svelte';

    export let title1;
    export let subtitle1;
    export let title2;
    export let subtitle2;
    export let title3;
</script>
<div id="donate" class="mt-48 mb-24 mx-4 md:mx-0 flex flex-col md:flex-row md:justify-around">
    <div class="md:w-3/5">
        <h2 class="text-3xl font-bold mb-2">{title1}</h2>
        <p class="text-lg">{subtitle1}</p>
        <h2 class="text-3xl font-bold mb-2 mt-8">{title2}</h2>
        <p class="text-lg">{subtitle2}</p>

    </div>
    
    <div>
        <h2 class="text-2xl font-bold md:text-center md:mt-0 mt-8">{title3}</h2>
        
        <div class="grid grid-cols-2 gap-5">
            <div class="mx-auto my-6">
                <h3 class="text-center text-lg font-semibold">Buy Me A Coffee</h3>
                <BuyMeACoffeeButton/>
            </div>
            <div class="mx-auto my-6">
                <h3 class="text-center text-lg font-semibold">PayPal</h3>
                <PayPalDonateButton/>
            </div>
            <div class="mx-auto my-6">
                <h3 class="text-center text-lg font-semibold">Bitcoin (BTC)</h3>
                <CopyCryptoAddress text="Copy BTC address" value="bc1q6cwufmaezwrjd72t5fv6radn0k070xnxhrcdus" textOnSuccess="Copied on the clipboard"/>
            </div>
            <div class="mx-auto my-6">
                <h3 class="text-center text-lg font-semibold">Ethereum (ETH)</h3>
                <CopyCryptoAddress text="Copy ETH address" value="0x7fC941DB7474ccA3290649651943E172F9C6B70F" textOnSuccess="Copied on the clipboard"/>
            </div>
        </div>
    </div>
    
</div>
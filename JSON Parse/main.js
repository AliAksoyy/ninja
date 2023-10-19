const a = `{
    "Payload":"{\"json\":\"{\\\"orderId\\\":\\\"GPA.3342-0208-2647-59633\\\",\\\"packageName\\\":\\\"com.DTech.SnakeOnline\\\",\\\"productId\\\":\\\"earnablepack_01\\\",\\\"purchaseTime\\\":1697635077997,\\\"purchaseState\\\":0,\\\"purchaseToken\\\":\\\"dbeloflmpnfonndjfmnhiipo.AO-J1OxpRT7W7OmBdDj3g_cbHbPPx1rw4V_SbZgUCrQ1bhNaWV2aZ9WlFtHdLaCBdYCgBC_VSIq2qRUmblsGA5AOfyly6KNp0neGsDm9Z-v_1uTxUY_5VDA\\\",\\\"quantity\\\":1,\\\"acknowledged\\\":false}\",\"signature\":\"C9141vHg0Ut14IWn61osVl0OcttOvSsyplXBnAhrTnxfGLDx0sZbXPopUkfppdFwjQq6E72lgyIdm7oRTR7hZfcrUprshe3IDqFrsDTF9NSkRpsbjM2NkBp26LTU+BpCr+zTTKjqmCEQIMs4JFoGrB6IjMnuTEbf4S/Uw/nutqLqRERNIM/lLpZvKyCApDdWSWHwz5dGzpGU36XouPxN9cs5lsEiqfujG6zibKH/0sYYsPH6JAcLkb3G33kCjaKMDNWVW5s56Q2oQyALLSfW4gskahSLHVtFhW+Tm78CUa1Uojo71R1iH75p/TXX7VI5MxG74MPzji6unkshRBzBuw==\",\"skuDetails\":[\"{\\\"productId\\\":\\\"earnablepack_01\\\",\\\"type\\\":\\\"inapp\\\",\\\"title\\\":\\\"Unified Support Package (com.DTech.SnakeOnline (unreviewed))\\\",\\\"name\\\":\\\"Unified Support Package\\\",\\\"iconUrl\\\":\\\"https:\\\\/\\\\/lh3.googleusercontent.com\\\\/btIgzqAzlb3OYTag94wYOyO-exTx4qkGZFfwopOydrJBWn4YbgdpNb2otjmBSRsgTA0\\\",\\\"description\\\":\\\"Birlestirilmis Destek Paketi\\\",\\\"price\\\":\\\"\\u20ba2,00\\\",\\\"price_amount_micros\\\":2000000,\\\"price_currency_code\\\":\\\"TRY\\\",\\\"skuDetailsToken\\\":\\\"AEuhp4KEcsPxLYOahdtsa2MYWdy2FyD9Qgmd14sO2QZnEukXi-ePqNf-T2XsmD3899k=\\\"}\"]}","Store":"GooglePlay","TransactionID":"dbeloflmpnfonndjfmnhiipo.AO-J1OxpRT7W7OmBdDj3g_cbHbPPx1rw4V_SbZgUCrQ1bhNaWV2aZ9WlFtHdLaCBdYCgBC_VSIq2qRUmblsGA5AOfyly6KNp0neGsDm9Z-v_1uTxUY_5VDA"}`;

const b = a
  .replaceAll(/"{/g, "{")
  .replaceAll("\\", "")
  .replaceAll('}",', "},")
  .replaceAll('"]', "]");

console.log(JSON.parse(b));

console.log(a.replace(/\\/gim, "").replace(/"{/gim, "{").replace(/}"/gim, "}"));

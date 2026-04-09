(function () {
    'use strict';

    // (storage keys no longer used — data lives on the server)

    const DEFAULT_GROUPS = [{"id":"c46a1d0a-b3e8-42f0-8547-561d9a834b60","name":"純色"},{"id":"747373cc-3ad6-43c6-8706-aaf3f90ee0e6","name":"白緯線"}];
    const DEFAULT_SWATCHES = [{"id":"6a21c48a-eee0-4db4-aba5-7a0ea7f0d145","name":"Mimosa+白","created":1775625986568,"groupId":"747373cc-3ad6-43c6-8706-aaf3f90ee0e6","warp":"#f0c05a","warpPantone":{"code":"14-0848 TPG","name":"Mimosa","hex":"#F0C05A"},"weft":"#f4f5f0","weftPantone":{"code":"11-0601 TPG","name":"Bright White","hex":"#F4F5F0"},"gap":9,"warpT":8,"weftT":5,"noise":35},{"id":"ca92b952-f32d-4e59-9d37-d594e1599774","name":"Mimosa","created":1775625977608,"groupId":"c46a1d0a-b3e8-42f0-8547-561d9a834b60","warp":"#f0c05a","warpPantone":{"code":"14-0848 TPG","name":"Mimosa","hex":"#F0C05A"},"weft":"#f0c05a","weftPantone":{"code":"14-0848 TPG","name":"Mimosa","hex":"#F0C05A"},"gap":9,"warpT":8,"weftT":5,"noise":35},{"id":"120a84f5-3683-4936-b4db-50ea0c798863","name":"Super Lemon+白","created":1775625957193,"groupId":"747373cc-3ad6-43c6-8706-aaf3f90ee0e6","warp":"#e4bf45","warpPantone":{"code":"14-0754 TPG","name":"Super Lemon","hex":"#E4BF45"},"weft":"#f4f5f0","weftPantone":{"code":"11-0601 TPG","name":"Bright White","hex":"#F4F5F0"},"gap":9,"warpT":8,"weftT":5,"noise":35},{"id":"c99ecb00-8dc2-411d-a405-db03ee5401b8","name":"Super Lemon","created":1775625952161,"groupId":"c46a1d0a-b3e8-42f0-8547-561d9a834b60","warp":"#e4bf45","warpPantone":{"code":"14-0754 TPG","name":"Super Lemon","hex":"#E4BF45"},"weft":"#e4bf45","weftPantone":{"code":"14-0754 TPG","name":"Super Lemon","hex":"#E4BF45"},"gap":9,"warpT":8,"weftT":5,"noise":35},{"id":"32f3b790-036c-49b9-89a6-a1ab6f37f842","name":"Ginger Spice+白","created":1775625933493,"groupId":"747373cc-3ad6-43c6-8706-aaf3f90ee0e6","warp":"#b65d48","warpPantone":{"code":"18-1535 TPG","name":"Ginger Spice","hex":"#B65D48"},"weft":"#f4f5f0","weftPantone":{"code":"11-0601 TPG","name":"Bright White","hex":"#F4F5F0"},"gap":9,"warpT":8,"weftT":5,"noise":35},{"id":"1473c0ce-c818-4c25-a933-609f995508e3","name":"Ginger Spice","created":1775625928024,"groupId":"c46a1d0a-b3e8-42f0-8547-561d9a834b60","warp":"#b65d48","warpPantone":{"code":"18-1535 TPG","name":"Ginger Spice","hex":"#B65D48"},"weft":"#b65d48","weftPantone":{"code":"18-1535 TPG","name":"Ginger Spice","hex":"#B65D48"},"gap":9,"warpT":8,"weftT":5,"noise":35},{"id":"62693d0f-c235-4661-8120-202c20805525","name":"Rose Tan+白","created":1775625911054,"groupId":"747373cc-3ad6-43c6-8706-aaf3f90ee0e6","warp":"#d19c97","warpPantone":{"code":"16-1511 TPG","name":"Rose Tan","hex":"#D19C97"},"weft":"#f4f5f0","weftPantone":{"code":"11-0601 TPG","name":"Bright White","hex":"#F4F5F0"},"gap":9,"warpT":8,"weftT":5,"noise":35},{"id":"859efbbb-7e53-4f2b-bcf9-98ded3c4be8b","name":"Rose Tan","created":1775625899039,"groupId":"c46a1d0a-b3e8-42f0-8547-561d9a834b60","warp":"#d19c97","warpPantone":{"code":"16-1511 TPG","name":"Rose Tan","hex":"#D19C97"},"weft":"#d19c97","weftPantone":{"code":"16-1511 TPG","name":"Rose Tan","hex":"#D19C97"},"gap":9,"warpT":8,"weftT":5,"noise":35},{"id":"50f736d8-2ada-4700-9e1f-4cf4cd204e89","name":"Harvest Gold+白","created":1775624815212,"groupId":"747373cc-3ad6-43c6-8706-aaf3f90ee0e6","warp":"#b68a3a","warpPantone":{"code":"16-0948 TPG","name":"Harvest Gold","hex":"#B68A3A"},"weft":"#f4f5f0","weftPantone":{"code":"11-0601 TPG","name":"Bright White","hex":"#F4F5F0"},"gap":9,"warpT":8,"weftT":5,"noise":35},{"id":"bc93d2a4-fc36-4986-85f0-8f247a566175","name":"Harvest Gold","created":1775624809527,"groupId":"c46a1d0a-b3e8-42f0-8547-561d9a834b60","warp":"#b68a3a","warpPantone":{"code":"16-0948 TPG","name":"Harvest Gold","hex":"#B68A3A"},"weft":"#b68a3a","weftPantone":{"code":"16-0948 TPG","name":"Harvest Gold","hex":"#B68A3A"},"gap":9,"warpT":8,"weftT":5,"noise":35},{"id":"3e4883eb-4c49-4e2f-92ec-c92e39c7350c","name":"Orange Ochre+白","created":1775624792168,"groupId":"747373cc-3ad6-43c6-8706-aaf3f90ee0e6","warp":"#dc793a","warpPantone":{"code":"16-1253 TPG","name":"Orange Ochre","hex":"#DC793A"},"weft":"#f4f5f0","weftPantone":{"code":"11-0601 TPG","name":"Bright White","hex":"#F4F5F0"},"gap":9,"warpT":8,"weftT":5,"noise":35},{"id":"3e267177-bb35-4bd2-b864-d2092a05c851","name":"Orange Ochre","created":1775624785966,"groupId":"c46a1d0a-b3e8-42f0-8547-561d9a834b60","warp":"#dc793a","warpPantone":{"code":"16-1253 TPG","name":"Orange Ochre","hex":"#DC793A"},"weft":"#dc793a","weftPantone":{"code":"16-1253 TPG","name":"Orange Ochre","hex":"#DC793A"},"gap":9,"warpT":8,"weftT":5,"noise":35},{"id":"c5771f87-36d4-48ba-b1cc-f5a8f813ac96","name":"Pureed Pumpkin+白","created":1775624765060,"groupId":"747373cc-3ad6-43c6-8706-aaf3f90ee0e6","warp":"#c34121","warpPantone":{"code":"17-1449 TPG","name":"Pureed Pumpkin","hex":"#C34121"},"weft":"#f4f5f0","weftPantone":{"code":"11-0601 TPG","name":"Bright White","hex":"#F4F5F0"},"gap":9,"warpT":8,"weftT":5,"noise":35},{"id":"448693df-8774-4a67-a99c-fcf206920f15","name":"Pureed Pumpkin","created":1775624756195,"groupId":"c46a1d0a-b3e8-42f0-8547-561d9a834b60","warp":"#c34121","warpPantone":{"code":"17-1449 TPG","name":"Pureed Pumpkin","hex":"#C34121"},"weft":"#c34121","weftPantone":{"code":"17-1449 TPG","name":"Pureed Pumpkin","hex":"#C34121"},"gap":9,"warpT":8,"weftT":5,"noise":35},{"id":"fdb8a457-0b25-4dfb-87c9-f7180d639c23","name":"Vintage Indigo+白","created":1775624670440,"groupId":"747373cc-3ad6-43c6-8706-aaf3f90ee0e6","warp":"#4a556b","warpPantone":{"code":"19-3929 TPG","name":"Vintage Indigo","hex":"#4A556B"},"weft":"#f4f5f0","weftPantone":{"code":"11-0601 TPG","name":"Bright White","hex":"#F4F5F0"},"gap":9,"warpT":8,"weftT":5,"noise":35},{"id":"c31d28b5-7eb1-4027-b26a-c3be2f6f4cdc","name":"Vintage Indigo","created":1775624644645,"groupId":"c46a1d0a-b3e8-42f0-8547-561d9a834b60","warp":"#4a556b","warpPantone":{"code":"19-3929 TPG","name":"Vintage Indigo","hex":"#4A556B"},"weft":"#4a556b","weftPantone":{"code":"19-3929 TPG","name":"Vintage Indigo","hex":"#4A556B"},"gap":9,"warpT":8,"weftT":5,"noise":35},{"id":"1d11f22e-82d0-41e9-8b02-dff1bda37a34","name":"Aqua Gray+白","created":1775623682611,"groupId":"747373cc-3ad6-43c6-8706-aaf3f90ee0e6","warp":"#a5b2aa","warpPantone":{"code":"15-5205 TPG","name":"Aqua Gray","hex":"#A5B2AA"},"weft":"#f4f5f0","weftPantone":{"code":"11-0601 TPG","name":"Bright White","hex":"#F4F5F0"},"gap":9,"warpT":8,"weftT":5,"noise":35},{"id":"da9a218b-3f30-4b18-ad71-360d672002c3","name":"Aqua Gray","created":1775623638116,"groupId":"c46a1d0a-b3e8-42f0-8547-561d9a834b60","warp":"#a5b2aa","warpPantone":{"code":"15-5205 TPG","name":"Aqua Gray","hex":"#A5B2AA"},"weft":"#a5b2aa","weftPantone":{"code":"15-5205 TPG","name":"Aqua Gray","hex":"#A5B2AA"},"gap":9,"warpT":8,"weftT":5,"noise":35},{"id":"82c7d35f-3fd0-41f7-8b7d-a682dfbca098","name":"Green Oasis+白","created":1775623615937,"groupId":"747373cc-3ad6-43c6-8706-aaf3f90ee0e6","warp":"#b0b454","warpPantone":{"code":"15-0538 TPG","name":"Green Oasis","hex":"#B0B454"},"weft":"#f4f5f0","weftPantone":{"code":"11-0601 TPG","name":"Bright White","hex":"#F4F5F0"},"gap":9,"warpT":8,"weftT":5,"noise":35},{"id":"e9aea0ef-c678-437f-9cc1-37ada26f6d7e","name":"Green Oasis","created":1775623580847,"groupId":"c46a1d0a-b3e8-42f0-8547-561d9a834b60","warp":"#b0b454","warpPantone":{"code":"15-0538 TPG","name":"Green Oasis","hex":"#B0B454"},"weft":"#b0b454","weftPantone":{"code":"15-0538 TPG","name":"Green Oasis","hex":"#B0B454"},"gap":9,"warpT":8,"weftT":5,"noise":35},{"id":"cd7ec92a-43b6-4f0e-a088-4c8e2e00228c","name":"Alpine Green+白","created":1775623553711,"groupId":"747373cc-3ad6-43c6-8706-aaf3f90ee0e6","warp":"#005f56","warpPantone":{"code":"18-5322 TPG","name":"Alpine Green","hex":"#005F56"},"weft":"#f4f5f0","weftPantone":{"code":"11-0601 TPG","name":"Bright White","hex":"#F4F5F0"},"gap":9,"warpT":8,"weftT":5,"noise":35},{"id":"5bbe8e25-9030-41da-981e-8b469602f71b","name":"Alpine Green","created":1775623545623,"groupId":"c46a1d0a-b3e8-42f0-8547-561d9a834b60","warp":"#005f56","warpPantone":{"code":"18-5322 TPG","name":"Alpine Green","hex":"#005F56"},"weft":"#005f56","weftPantone":{"code":"18-5322 TPG","name":"Alpine Green","hex":"#005F56"},"gap":9,"warpT":8,"weftT":5,"noise":35},{"id":"d65e9ee6-b1df-4f56-ad51-08ef55255bcc","name":"Dark Ivy+白","created":1775623257910,"groupId":"747373cc-3ad6-43c6-8706-aaf3f90ee0e6","warp":"#5b7763","warpPantone":{"code":"17-5912 TPG","name":"Dark Ivy","hex":"#5B7763"},"weft":"#f4f5f0","weftPantone":{"code":"11-0601 TPG","name":"Bright White","hex":"#F4F5F0"},"gap":9,"warpT":8,"weftT":5,"noise":35},{"id":"92088eff-5630-4d29-a70a-4badc1c516de","name":"Dark Ivy","created":1775623249745,"groupId":"c46a1d0a-b3e8-42f0-8547-561d9a834b60","warp":"#5b7763","warpPantone":{"code":"17-5912 TPG","name":"Dark Ivy","hex":"#5B7763"},"weft":"#5b7763","weftPantone":{"code":"17-5912 TPG","name":"Dark Ivy","hex":"#5B7763"},"gap":9,"warpT":8,"weftT":5,"noise":35},{"id":"df25ac3b-9328-4662-ac88-b77b31cc04db","name":"Falcon+白","created":1775623215942,"groupId":"747373cc-3ad6-43c6-8706-aaf3f90ee0e6","warp":"#6d625b","warpPantone":{"code":"18-1304 TPG","name":"Falcon","hex":"#6D625B"},"weft":"#f4f5f0","weftPantone":{"code":"11-0601 TPG","name":"Bright White","hex":"#F4F5F0"},"gap":9,"warpT":8,"weftT":5,"noise":35},{"id":"c332a9dc-5678-4afb-9b26-25cf133ff56c","name":"Falcon","created":1775623204076,"groupId":"c46a1d0a-b3e8-42f0-8547-561d9a834b60","warp":"#6d625b","warpPantone":{"code":"18-1304 TPG","name":"Falcon","hex":"#6D625B"},"weft":"#6d625b","weftPantone":{"code":"18-1304 TPG","name":"Falcon","hex":"#6D625B"},"gap":9,"warpT":8,"weftT":5,"noise":35},{"id":"7bfe928c-18ae-4e8d-87b8-5b29ec22e361","name":"Bijou Blue+白","created":1775622468033,"groupId":"747373cc-3ad6-43c6-8706-aaf3f90ee0e6","warp":"#4e5e7f","warpPantone":{"code":"18-3921 TPG","name":"Bijou Blue","hex":"#4E5E7F"},"weft":"#f4f5f0","weftPantone":{"code":"11-0601 TPG","name":"Bright White","hex":"#F4F5F0"},"gap":9,"warpT":8,"weftT":5,"noise":35},{"id":"c6299f6d-6c44-4ce2-bb24-124b69c0c632","name":"Bijou Blue","created":1775622445749,"groupId":"c46a1d0a-b3e8-42f0-8547-561d9a834b60","warp":"#4e5e7f","warpPantone":{"code":"18-3921 TPG","name":"Bijou Blue","hex":"#4E5E7F"},"weft":"#4e5e7f","weftPantone":{"code":"18-3921 TPG","name":"Bijou Blue","hex":"#4E5E7F"},"gap":9,"warpT":8,"weftT":5,"noise":35},{"id":"c5e62598-ecc1-4b8e-b5ae-eddf2b121e0f","name":"Black Beauty+白","created":1775620020830,"groupId":"747373cc-3ad6-43c6-8706-aaf3f90ee0e6","warp":"#26262a","warpPantone":{"code":"19-3911 TPG","name":"Black Beauty","hex":"#26262A"},"weft":"#f4f5f0","weftPantone":{"code":"11-0601 TPG","name":"Bright White","hex":"#F4F5F0"},"gap":9,"warpT":8,"weftT":5,"noise":35},{"id":"6fb08647-1196-4625-8b2a-2ac93f181dc0","name":"Black Beauty","created":1775617660276,"warp":"#26262a","warpPantone":{"code":"19-3911 TPG","name":"Black Beauty","hex":"#26262A"},"weft":"#2e272a","weftPantone":{"code":"19-3909 TPG","name":"Black Bean","hex":"#2E272A"},"gap":9,"warpT":8,"weftT":5,"noise":35,"groupId":"c46a1d0a-b3e8-42f0-8547-561d9a834b60"}];

    // ── Pantone Fashion, Home + Interiors (TPG / The Pantone Guide — paper) ──
    // 2310 colors sourced from github.com/Margaret2/pantone-colors
    const PANTONE_FHI = [
        { code: '11-0103 TPG', name: 'Egret', hex: '#F3ECE0' },
        { code: '11-0602 TPG', name: 'Snow White', hex: '#F2F0EB' },
        { code: '11-0601 TPG', name: 'Bright White', hex: '#F4F5F0' },
        { code: '11-4201 TPG', name: 'Cloud Dancer', hex: '#F0EEE9' },
        { code: '11-0604 TPG', name: 'Gardenia', hex: '#F1E8DF' },
        { code: '11-4300 TPG', name: 'Marshmallow', hex: '#F0EEE4' },
        { code: '11-4800 TPG', name: 'Blanc De Blanc', hex: '#E7E9E7' },
        { code: '11-0606 TPG', name: 'Pristine', hex: '#F2E8DA' },
        { code: '11-0701 TPG', name: 'Whisper White', hex: '#EDE6DB' },
        { code: '12-0104 TPG', name: 'White Asparagus', hex: '#E1DBC8' },
        { code: '13-0905 TPG', name: 'Birch', hex: '#DDD5C7' },
        { code: '12-5202 TPG', name: 'Turtledove', hex: '#DED7C8' },
        { code: '12-0105 TPG', name: 'Bone White', hex: '#D7D0C0' },
        { code: '13-4403 TPG', name: 'Silver Birch', hex: '#D2CFC4' },
        { code: '11-0104 TPG', name: 'Vanilla Ice', hex: '#F0EADA' },
        { code: '11-0107 TPG', name: 'Papyrus', hex: '#F5EDD6' },
        { code: '11-0105 TPG', name: 'Antique White', hex: '#EDE3D2' },
        { code: '11-0507 TPG', name: 'Winter White', hex: '#F5ECD2' },
        { code: '12-0804 TPG', name: 'Cloud Cream', hex: '#E6DDC5' },
        { code: '12-0605 TPG', name: 'Angora', hex: '#DFD1BB' },
        { code: '12-0703 TPG', name: 'Seedpearl', hex: '#E6DAC4' },
        { code: '12-0815 TPG', name: 'Vanilla Custard', hex: '#F3E0BE' },
        { code: '12-0713 TPG', name: 'Almond Oil', hex: '#F4EFC1' },
        { code: '12-0812 TPG', name: 'Alabaster Gleam', hex: '#F0DEBD' },
        { code: '12-0712 TPG', name: 'Vanilla', hex: '#F4E1C1' },
        { code: '12-0806 TPG', name: 'Rutabaga', hex: '#ECDDBE' },
        { code: '13-0815 TPG', name: 'Banana Crepe', hex: '#E7D3AD' },
        { code: '13-0917 TPG', name: 'Italian Straw', hex: '#E7D1A1' },
        { code: '12-0304 TPG', name: 'Whitecap Gray', hex: '#E0D5C6' },
        { code: '13-0607 TPG', name: 'Fog', hex: '#D0C5B1' },
        { code: '12-0000 TPG', name: 'White Swan', hex: '#E4D7C5' },
        { code: '13-0907 TPG', name: 'Sandshell', hex: '#D8CCBB' },
        { code: '12-1403 TPG', name: 'Tapioca', hex: '#DCCDBC' },
        { code: '13-1006 TPG', name: 'Creme Brulee', hex: '#DBCCB5' },
        { code: '13-0908 TPG', name: 'Parchment', hex: '#DFD1BE' },
        { code: '12-1106 TPG', name: 'Sheer Pink', hex: '#F6E5DB' },
        { code: '12-1108 TPG', name: 'Dew', hex: '#EEDED1' },
        { code: '11-1404 TPG', name: 'Powder Puff', hex: '#F3E0D6' },
        { code: '11-0907 TPG', name: 'Pearled Ivory', hex: '#F0DFCC' },
        { code: '12-0704 TPG', name: 'White Smoke', hex: '#EDDCC9' },
        { code: '11-0809 TPG', name: 'Ecru', hex: '#F3DFCA' },
        { code: '12-0710 TPG', name: 'Navajo', hex: '#EFDCC3' },
        { code: '12-2103 TPG', name: 'Almost Mauve', hex: '#E7DCD9' },
        { code: '11-2409 TPG', name: 'Delicacy', hex: '#F5E3E2' },
        { code: '11-2309 TPG', name: 'Petal Pink', hex: '#F2E2E0' },
        { code: '11-1005 TPG', name: 'Bridal Blush', hex: '#EEE2DD' },
        { code: '11-1306 TPG', name: 'Cream Pink', hex: '#F6E4D9' },
        { code: '11-1305 TPG', name: 'Angel Wing', hex: '#F3DFD7' },
        { code: '11-0603 TPG', name: 'Pastel Parchment', hex: '#E5D9D3' },
        { code: '11-4202 TPG', name: 'Star White', hex: '#EFEFE8' },
        { code: '11-4301 TPG', name: 'Lily White', hex: '#E2E2DA' },
        { code: '12-4302 TPG', name: 'Vaporous Gray', hex: '#DFDDD7' },
        { code: '11-4802 TPG', name: 'Summer Shower', hex: '#E5EBE3' },
        { code: '11-4803 TPG', name: 'Ice', hex: '#E0E4D9' },
        { code: '12-6207 TPG', name: 'Frost', hex: '#DDE2D6' },
        { code: '12-5201 TPG', name: 'Icicle', hex: '#DADCD0' },
        { code: '11-4601 TPG', name: 'Bit Of Blue', hex: '#E2EAEB' },
        { code: '11-4303 TPG', name: 'Mystic Blue', hex: '#E1E3DE' },
        { code: '12-4304 TPG', name: 'Bluewash', hex: '#E2E6E0' },
        { code: '12-4305 TPG', name: 'Spa Blue', hex: '#D3DEDF' },
        { code: '11-4804 TPG', name: 'Lightest Sky', hex: '#E4EADF' },
        { code: '11-4805 TPG', name: 'Hint Of Mint', hex: '#D8E8E6' },
        { code: '12-5203 TPG', name: 'Murmur', hex: '#D2D8D2' },
        { code: '12-4306 TPG', name: 'Barely Blue', hex: '#DDE0DF' },
        { code: '12-4705 TPG', name: 'Blue Blush', hex: '#D6DBD9' },
        { code: '12-5603 TPG', name: 'Zephyr Blue', hex: '#D3D9D1' },
        { code: '12-5403 TPG', name: 'Blue Flower', hex: '#D0D9D4' },
        { code: '12-5303 TPG', name: 'Sprout Green', hex: '#CBD7D2' },
        { code: '11-4604 TPG', name: 'Billowing Sail', hex: '#D8E7E7' },
        { code: '12-5508 TPG', name: 'Hushed Green', hex: '#D8E9E5' },
        { code: '12-0910 TPG', name: 'Lambs Wool', hex: '#E5D0B1' },
        { code: '14-1119 TPG', name: 'Winter Wheat', hex: '#DFC09F' },
        { code: '13-0814 TPG', name: 'Summer Melon', hex: '#EAD3AE' },
        { code: '13-0916 TPG', name: 'Chamomile', hex: '#E8D0A7' },
        { code: '12-0714 TPG', name: 'Cornhusk', hex: '#F2D6AE' },
        { code: '12-0817 TPG', name: 'Apricot Gelato', hex: '#F5D7AF' },
        { code: '13-1009 TPG', name: 'Biscotti', hex: '#DAC7AB' },
        { code: '12-0311 TPG', name: 'Asparagus Green', hex: '#D2CDB4' },
        { code: '13-1007 TPG', name: 'Oyster White', hex: '#D2CAAF' },
        { code: '13-0711 TPG', name: 'Putty', hex: '#D4CAB0' },
        { code: '13-0611 TPG', name: 'Moth', hex: '#D2CBAF' },
        { code: '14-1108 TPG', name: 'Wood Ash', hex: '#D7CAB0' },
        { code: '14-1014 TPG', name: 'Gravel', hex: '#CBBFA2' },
        { code: '15-1216 TPG', name: 'Pale Khaki', hex: '#BFAF92' },
        { code: '12-0404 TPG', name: 'Light Gray', hex: '#DAD8C9' },
        { code: '12-6204 TPG', name: 'Silver Green', hex: '#D7D7C7' },
        { code: '14-6305 TPG', name: 'Pelican', hex: '#C1BCAC' },
        { code: '14-0105 TPG', name: 'Overcast', hex: '#C3BDAB' },
        { code: '14-0210 TPG', name: 'Tidal Foam', hex: '#BFB9A3' },
        { code: '15-6307 TPG', name: 'Agate Gray', hex: '#B1B09F' },
        { code: '14-6308 TPG', name: 'Alfalfa', hex: '#B7B59F' },
        { code: '14-0108 TPG', name: 'Castle Wall', hex: '#C8C1AB' },
        { code: '14-1107 TPG', name: 'Oyster Gray', hex: '#CBC1AE' },
        { code: '14-0708 TPG', name: 'Cement', hex: '#C4B6A6' },
        { code: '15-0309 TPG', name: 'Spray Green', hex: '#AEA692' },
        { code: '15-0513 TPG', name: 'Eucalyptus', hex: '#B1A992' },
        { code: '16-1108 TPG', name: 'Twill', hex: '#A79B82' },
        { code: '16-1110 TPG', name: 'Olive Gray', hex: '#A6997A' },
        { code: '17-1109 TPG', name: 'Chinchilla', hex: '#9C8E7B' },
        { code: '17-1107 TPG', name: 'Seneca Rock', hex: '#9A927F' },
        { code: '17-0610 TPG', name: 'Laurel Oak', hex: '#918C7E' },
        { code: '17-1113 TPG', name: 'Coriander', hex: '#938772' },
        { code: '17-1009 TPG', name: 'Dune', hex: '#998978' },
        { code: '17-1118 TPG', name: 'Lead Gray', hex: '#8A7963' },
        { code: '18-0617 TPG', name: 'Covert Green', hex: '#80765F' },
        { code: '15-1306 TPG', name: 'Oxford Tan', hex: '#B8A99A' },
        { code: '16-1105 TPG', name: 'Plaza Taupe', hex: '#AEA393' },
        { code: '16-1106 TPG', name: 'Tuffet', hex: '#A59788' },
        { code: '17-1312 TPG', name: 'Silver Mink', hex: '#9F8D7C' },
        { code: '17-1310 TPG', name: 'Timber Wolf', hex: '#8D8070' },
        { code: '17-0808 TPG', name: 'Taupe Gray', hex: '#8E7C71' },
        { code: '17-1410 TPG', name: 'Pine Bark', hex: '#827064' },
        { code: '14-0002 TPG', name: 'Pumice Stone', hex: '#CAC2B9' },
        { code: '16-0906 TPG', name: 'Simply Taupe', hex: '#AD9F93' },
        { code: '16-1107 TPG', name: 'Aluminum', hex: '#9F9586' },
        { code: '16-1407 TPG', name: 'Cobblestone', hex: '#A89A8E' },
        { code: '18-1110 TPG', name: 'Brindle', hex: '#82776B' },
        { code: '18-1112 TPG', name: 'Walnut', hex: '#776A5F' },
        { code: '18-0513 TPG', name: 'Bungee Cord', hex: '#696156' },
        { code: '13-0401 TPG', name: 'Oatmeal', hex: '#CBC3B4' },
        { code: '13-0000 TPG', name: 'Moonbeam', hex: '#CDC6BD' },
        { code: '13-5304 TPG', name: 'Rainy Day', hex: '#CFC8BD' },
        { code: '13-0403 TPG', name: 'Gray Morn', hex: '#CABEB5' },
        { code: '14-1106 TPG', name: 'Peyote', hex: '#C5BBAE' },
        { code: '15-1305 TPG', name: 'Feather Gray', hex: '#B8AD9E' },
        { code: '16-0806 TPG', name: 'Goat', hex: '#A89A91' },
        { code: '13-0002 TPG', name: 'White Sand', hex: '#DBD5D1' },
        { code: '14-0000 TPG', name: 'Silver Gray', hex: '#C1B7B0' },
        { code: '15-4503 TPG', name: 'Chateau Gray', hex: '#BBB1A8' },
        { code: '16-1305 TPG', name: 'String', hex: '#AA9F96' },
        { code: '16-1406 TPG', name: 'Atmosphere', hex: '#A89C94' },
        { code: '17-1210 TPG', name: 'Moon Rock', hex: '#958B84' },
        { code: '17-1212 TPG', name: 'Fungi', hex: '#8F8177' },
        { code: '14-4501 TPG', name: 'Silver Lining', hex: '#BDB6AB' },
        { code: '14-4500 TPG', name: 'Moonstruck', hex: '#C2BEB6' },
        { code: '15-6304 TPG', name: 'Pussywillow Gray', hex: '#AEACA1' },
        { code: '16-0207 TPG', name: 'London Fog', hex: '#A29E92' },
        { code: '17-0207 TPG', name: 'Rock Ridge', hex: '#918C86' },
        { code: '18-4105 TPG', name: 'Moon Mist', hex: '#80817D' },
        { code: '18-0510 TPG', name: 'Castor Gray', hex: '#646762' },
        { code: '14-4102 TPG', name: 'Glacier Gray', hex: '#C5C6C7' },
        { code: '14-4201 TPG', name: 'Lunar Rock', hex: '#C5C5C5' },
        { code: '13-4303 TPG', name: 'Dawn Blue', hex: '#CACCCB' },
        { code: '14-4103 TPG', name: 'Gray Violet', hex: '#BBBCBC' },
        { code: '14-4203 TPG', name: 'Vapor Blue', hex: '#BEBDBD' },
        { code: '15-4101 TPG', name: 'High Rise', hex: '#AEB2B5' },
        { code: '16-4702 TPG', name: 'Limestone', hex: '#989A98' },
        { code: '15-4502 TPG', name: 'Silver Cloud', hex: '#BEB7B0' },
        { code: '15-0000 TPG', name: 'Dove', hex: '#B3ADA7' },
        { code: '16-5803 TPG', name: 'Flint Gray', hex: '#A09C98' },
        { code: '16-4402 TPG', name: 'Drizzle', hex: '#A09F9C' },
        { code: '17-0205 TPG', name: 'Elephant Skin', hex: '#8F8982' },
        { code: '17-1506 TPG', name: 'Cinder', hex: '#8A7E78' },
        { code: '17-1500 TPG', name: 'Steeple Gray', hex: '#827E7C' },
        { code: '14-4503 TPG', name: 'Metal', hex: '#BABFBC' },
        { code: '14-4804 TPG', name: 'Blue Fox', hex: '#B9BCB6' },
        { code: '15-4003 TPG', name: 'Storm Gray', hex: '#B5BAB6' },
        { code: '15-4704 TPG', name: 'Pigeon', hex: '#A9AFAA' },
        { code: '15-4703 TPG', name: 'Mirage Gray', hex: '#ABAFAE' },
        { code: '15-4702 TPG', name: 'Puritan Gray', hex: '#A8B0AE' },
        { code: '16-5904 TPG', name: 'Wrought Iron', hex: '#999E98' },
        { code: '16-3801 TPG', name: 'Opal Gray', hex: '#A49E9E' },
        { code: '17-1501 TPG', name: 'Wild Dove', hex: '#8B8C89' },
        { code: '17-4402 TPG', name: 'Neutral Gray', hex: '#8E918F' },
        { code: '18-0503 TPG', name: 'Gargoyle', hex: '#686767' },
        { code: '18-0000 TPG', name: 'Smoked Pearl', hex: '#656466' },
        { code: '18-5105 TPG', name: 'Sedona Sage', hex: '#686D6C' },
        { code: '18-0306 TPG', name: 'Gunmetal', hex: '#5C5D5B' },
        { code: '14-4002 TPG', name: 'Wind Chime', hex: '#CAC5C2' },
        { code: '16-0000 TPG', name: 'Paloma', hex: '#9F9C99' },
        { code: '18-0601 TPG', name: 'Charcoal Gray', hex: '#6C6868' },
        { code: '18-4005 TPG', name: 'Steel Gray', hex: '#726F70' },
        { code: '18-5203 TPG', name: 'Pewter', hex: '#666564' },
        { code: '18-0201 TPG', name: 'Castlerock', hex: '#5F5E62' },
        { code: '19-3908 TPG', name: 'Nine Iron', hex: '#46434A' },
        { code: '16-3802 TPG', name: 'Ash', hex: '#A09998' },
        { code: '17-1502 TPG', name: 'Cloudburst', hex: '#837F7F' },
        { code: '17-0000 TPG', name: 'Frost Gray', hex: '#848283' },
        { code: '18-3905 TPG', name: 'Excalibur', hex: '#676168' },
        { code: '18-0403 TPG', name: 'Dark Gull Gray', hex: '#625D5D' },
        { code: '19-3905 TPG', name: 'Rabbit', hex: '#5F575C' },
        { code: '19-3903 TPG', name: 'Shale', hex: '#4A3F41' },
        { code: '17-0909 TPG', name: 'Fossil', hex: '#806F63' },
        { code: '19-0810 TPG', name: 'Major Brown', hex: '#5B5149' },
        { code: '19-0809 TPG', name: 'Chocolate Chip', hex: '#685A4E' },
        { code: '19-0820 TPG', name: 'Canteen', hex: '#5E5347' },
        { code: '18-0615 TPG', name: 'Stone Gray', hex: '#685E4F' },
        { code: '18-0820 TPG', name: 'Capers', hex: '#695E4B' },
        { code: '19-0618 TPG', name: 'Beech', hex: '#5B4F3B' },
        { code: '19-0822 TPG', name: 'Tarmac', hex: '#5A5348' },
        { code: '19-0614 TPG', name: 'Wren', hex: '#4A4139' },
        { code: '19-0608 TPG', name: 'Black Olive', hex: '#48413B' },
        { code: '19-0405 TPG', name: 'Beluga', hex: '#4A4843' },
        { code: '19-0506 TPG', name: 'Black Ink', hex: '#44413C' },
        { code: '19-0508 TPG', name: 'Peat', hex: '#3B3A36' },
        { code: '19-5708 TPG', name: 'Jet Set', hex: '#262C2A' },
        { code: '18-1306 TPG', name: 'Iron', hex: '#736460' },
        { code: '19-3803 TPG', name: 'Plum Kitten', hex: '#625B5C' },
        { code: '19-0812 TPG', name: 'Turkish Coffee', hex: '#483F39' },
        { code: '19-1111 TPG', name: 'Black Coffee', hex: '#3B302F' },
        { code: '19-1101 TPG', name: 'After Dark', hex: '#3C3535' },
        { code: '19-1102 TPG', name: 'Licorice', hex: '#3A3536' },
        { code: '19-0000 TPG', name: 'Raven', hex: '#413E3D' },
        { code: '19-0303 TPG', name: 'Jet Black', hex: '#2D2C2F' },
        { code: '19-4205 TPG', name: 'Phantom', hex: '#39373B' },
        { code: '19-4005 TPG', name: 'Stretch Limo', hex: '#2B2C30' },
        { code: '19-4203 TPG', name: 'Moonless Night', hex: '#2F2D30' },
        { code: '19-4006 TPG', name: 'Caviar', hex: '#292A2D' },
        { code: '19-4305 TPG', name: 'Pirate Black', hex: '#363838' },
        { code: '19-4007 TPG', name: 'Anthracite', hex: '#28282D' },
        { code: '12-1009 TPG', name: 'Vanilla Cream', hex: '#F4D8C6' },
        { code: '12-0811 TPG', name: 'Dawn', hex: '#EBD2B7' },
        { code: '13-1010 TPG', name: 'Gray Sand', hex: '#E5CCAF' },
        { code: '12-0813 TPG', name: 'Autumn Blonde', hex: '#EED0AE' },
        { code: '14-1120 TPG', name: 'Apricot Illusion', hex: '#E2C4A6' },
        { code: '13-1014 TPG', name: 'Mellow Buff', hex: '#D8B998' },
        { code: '14-1122 TPG', name: 'Sheepskin', hex: '#DAB58F' },
        { code: '14-1116 TPG', name: 'Almond Buff', hex: '#CCB390' },
        { code: '14-1118 TPG', name: 'Beige', hex: '#D5BA98' },
        { code: '15-1225 TPG', name: 'Sand', hex: '#CCA67F' },
        { code: '15-1220 TPG', name: 'Latte', hex: '#C5A582' },
        { code: '16-1334 TPG', name: 'Tan', hex: '#B69574' },
        { code: '16-1333 TPG', name: 'Doe', hex: '#B98E68' },
        { code: '17-1328 TPG', name: 'Indian Tan', hex: '#AD8567' },
        { code: '15-1116 TPG', name: 'Safari', hex: '#BAAA91' },
        { code: '15-1213 TPG', name: 'Candied Ginger', hex: '#BFA387' },
        { code: '15-1214 TPG', name: 'Warm Sand', hex: '#C5AE91' },
        { code: '15-1314 TPG', name: 'Cuban Sand', hex: '#C1A68D' },
        { code: '16-1320 TPG', name: 'Nougat', hex: '#B69885' },
        { code: '16-1310 TPG', name: 'Natural', hex: '#AA907D' },
        { code: '16-1212 TPG', name: 'Nomad', hex: '#B49F89' },
        { code: '13-0513 TPG', name: 'Frozen Dew', hex: '#D8CFB2' },
        { code: '13-1008 TPG', name: 'Bleached Sand', hex: '#DACCB4' },
        { code: '14-1112 TPG', name: 'Pebble', hex: '#CAB698' },
        { code: '16-0924 TPG', name: 'Croissant', hex: '#C4AB86' },
        { code: '16-1010 TPG', name: 'Incense', hex: '#AF9A7E' },
        { code: '16-1315 TPG', name: 'Cornstalk', hex: '#A9947A' },
        { code: '17-1320 TPG', name: 'Tannin', hex: '#A68A6D' },
        { code: '14-0615 TPG', name: 'Green Haze', hex: '#CAC4A4' },
        { code: '15-1217 TPG', name: 'Mojave Desert', hex: '#C7B595' },
        { code: '15-1119 TPG', name: 'Taos Taupe', hex: '#BFA77F' },
        { code: '16-1324 TPG', name: 'Lark', hex: '#B89B72' },
        { code: '17-1022 TPG', name: 'Kelp', hex: '#988467' },
        { code: '17-1028 TPG', name: 'Antique Bronze', hex: '#907954' },
        { code: '17-0935 TPG', name: 'Dull Gold', hex: '#8A6F48' },
        { code: '17-1134 TPG', name: 'Brown Sugar', hex: '#A17249' },
        { code: '17-1044 TPG', name: 'Chipmunk', hex: '#976F4C' },
        { code: '17-1327 TPG', name: 'Tobacco Brown', hex: '#9A7352' },
        { code: '18-1027 TPG', name: 'Bison', hex: '#6E4F3A' },
        { code: '18-1048 TPG', name: 'Monks Robe', hex: '#704822' },
        { code: '18-1033 TPG', name: 'Dachshund', hex: '#704F37' },
        { code: '18-1031 TPG', name: 'Toffee', hex: '#755139' },
        { code: '18-1130 TPG', name: 'Aztec', hex: '#7A5747' },
        { code: '18-1222 TPG', name: 'Cocoa Brown', hex: '#6C5043' },
        { code: '18-1124 TPG', name: 'Partridge', hex: '#725440' },
        { code: '19-1230 TPG', name: 'Friar Brown', hex: '#6E493A' },
        { code: '19-1217 TPG', name: 'Mustang', hex: '#684B40' },
        { code: '19-1121 TPG', name: 'Pinecone', hex: '#61473B' },
        { code: '19-1218 TPG', name: 'Potting Soil', hex: '#54392D' },
        { code: '18-1022 TPG', name: 'Ermine', hex: '#836B4F' },
        { code: '18-1018 TPG', name: 'Otter', hex: '#7F674F' },
        { code: '18-0920 TPG', name: 'Kangaroo', hex: '#725E43' },
        { code: '18-0928 TPG', name: 'Sepia', hex: '#6B543E' },
        { code: '18-0930 TPG', name: 'Coffee Liqueur', hex: '#6A513B' },
        { code: '19-0815 TPG', name: 'Desert Palm', hex: '#5A4632' },
        { code: '19-0617 TPG', name: 'Teak', hex: '#655341' },
        { code: '18-1015 TPG', name: 'Shitake', hex: '#736253' },
        { code: '18-1016 TPG', name: 'Cub', hex: '#6E5C4B' },
        { code: '19-1116 TPG', name: 'Carafe', hex: '#5D473A' },
        { code: '19-1020 TPG', name: 'Dark Earth', hex: '#5C4939' },
        { code: '19-0814 TPG', name: 'Slate Black', hex: '#4B3D33' },
        { code: '19-0912 TPG', name: 'Chocolate Brown', hex: '#4E403B' },
        { code: '19-0712 TPG', name: 'Demitasse', hex: '#40342B' },
        { code: '18-1312 TPG', name: 'Deep Taupe', hex: '#7B6660' },
        { code: '19-1213 TPG', name: 'Shopping Bag', hex: '#5A4743' },
        { code: '19-1118 TPG', name: 'Chestnut', hex: '#584039' },
        { code: '19-1015 TPG', name: 'Bracken', hex: '#4F3F3B' },
        { code: '19-1314 TPG', name: 'Seal Brown', hex: '#493B39' },
        { code: '19-1016 TPG', name: 'Java', hex: '#433331' },
        { code: '19-0915 TPG', name: 'Coffee Bean', hex: '#40312F' },
        { code: '12-1006 TPG', name: 'Mother Of Pearl', hex: '#E9D4C3' },
        { code: '12-1007 TPG', name: 'Pastel Rose Tan', hex: '#E9D1BF' },
        { code: '12-1005 TPG', name: 'Novelle Peach', hex: '#E7CFBD' },
        { code: '12-0807 TPG', name: 'Sun Kiss', hex: '#EBD1BB' },
        { code: '13-1011 TPG', name: 'Ivory Cream', hex: '#DAC0A7' },
        { code: '14-1210 TPG', name: 'Shifting Sand', hex: '#D8C0AD' },
        { code: '13-1013 TPG', name: 'Appleblossom', hex: '#DDBCA0' },
        { code: '12-0601 TPG', name: 'Eggnog', hex: '#ECE1D3' },
        { code: '13-1108 TPG', name: 'Cream Tan', hex: '#E4C7B8' },
        { code: '13-1106 TPG', name: 'Sand Dollar', hex: '#DECDBE' },
        { code: '14-1209 TPG', name: 'Smoke Gray', hex: '#CEBAA8' },
        { code: '15-1308 TPG', name: 'Doeskin', hex: '#BDAB9B' },
        { code: '15-1215 TPG', name: 'Sesame', hex: '#BAA38B' },
        { code: '16-1210 TPG', name: 'Light Taupe', hex: '#B19D8D' },
        { code: '16-1318 TPG', name: 'Warm Taupe', hex: '#AF9483' },
        { code: '16-1412 TPG', name: 'Stucco', hex: '#A58D7F' },
        { code: '16-1415 TPG', name: 'Almondine', hex: '#A78C8B' },
        { code: '16-1414 TPG', name: 'Chanterelle', hex: '#A28776' },
        { code: '17-1418 TPG', name: 'Ginger Snap', hex: '#977D70' },
        { code: '17-1321 TPG', name: 'Woodsmoke', hex: '#947764' },
        { code: '17-1319 TPG', name: 'Amphora', hex: '#9F8672' },
        { code: '15-1309 TPG', name: 'Moonlight', hex: '#C5B1A0' },
        { code: '14-1212 TPG', name: 'Frappe', hex: '#D1B7A0' },
        { code: '15-1315 TPG', name: 'Rugby Tan', hex: '#C2A594' },
        { code: '16-1221 TPG', name: 'Roebuck', hex: '#B09080' },
        { code: '17-1223 TPG', name: 'Praline', hex: '#AD8B75' },
        { code: '17-1322 TPG', name: 'Burro', hex: '#947764' },
        { code: '17-1417 TPG', name: 'Beaver Fur', hex: '#997867' },
        { code: '14-1213 TPG', name: 'Toasted Almond', hex: '#D2B49C' },
        { code: '17-1225 TPG', name: 'Tawny Birch', hex: '#AE856C' },
        { code: '16-1323 TPG', name: 'Macaroon', hex: '#B38B71' },
        { code: '17-1226 TPG', name: 'Tawny Brown', hex: '#AB856F' },
        { code: '17-1224 TPG', name: 'Camel', hex: '#B0846A' },
        { code: '16-1331 TPG', name: 'Toast', hex: '#CA9978' },
        { code: '16-1327 TPG', name: 'Toasted Nut', hex: '#C08768' },
        { code: '12-0911 TPG', name: 'Nude', hex: '#F2D3BC' },
        { code: '12-0912 TPG', name: 'Tender Peach', hex: '#F8D5B8' },
        { code: '12-0913 TPG', name: 'Alesan', hex: '#F1CEB3' },
        { code: '12-0915 TPG', name: 'Pale Peach', hex: '#FED1BD' },
        { code: '12-1011 TPG', name: 'Peach Puree', hex: '#EFCFBA' },
        { code: '13-1114 TPG', name: 'Bellini', hex: '#F4C9B1' },
        { code: '14-1217 TPG', name: 'Amberlight', hex: '#E2BEA2' },
        { code: '12-1107 TPG', name: 'Peach Dust', hex: '#F0D8CC' },
        { code: '12-1008 TPG', name: 'Linen', hex: '#EDD2C0' },
        { code: '12-1010 TPG', name: 'Scallop Shell', hex: '#FBD8C9' },
        { code: '12-1209 TPG', name: 'Soft Pink', hex: '#F2D8CD' },
        { code: '13-1404 TPG', name: 'Pale Dogwood', hex: '#EDCDC2' },
        { code: '12-1206 TPG', name: 'Silver Peony', hex: '#E7CFC7' },
        { code: '14-1307 TPG', name: 'Rose Dust', hex: '#CDB2A5' },
        { code: '13-1405 TPG', name: 'Shell', hex: '#E1CFC6' },
        { code: '13-1107 TPG', name: 'Whisper Pink', hex: '#DACBBE' },
        { code: '12-1404 TPG', name: 'Pink Tint', hex: '#DBCBBD' },
        { code: '14-1311 TPG', name: 'Evening Sand', hex: '#DDB6AB' },
        { code: '15-1317 TPG', name: 'Sirocco', hex: '#C39D88' },
        { code: '16-1317 TPG', name: 'Brush', hex: '#B99984' },
        { code: '17-1227 TPG', name: 'Cafe Au Lait', hex: '#AE8774' },
        { code: '14-1310 TPG', name: 'Cameo Rose', hex: '#D7B8AB' },
        { code: '14-1312 TPG', name: 'Pale Blush', hex: '#E4BFB3' },
        { code: '14-1313 TPG', name: 'Rose Cloud', hex: '#DBB0A2' },
        { code: '14-1314 TPG', name: 'Spanish Villa', hex: '#DFBAA9' },
        { code: '15-1316 TPG', name: 'Maple Sugar', hex: '#C9A38D' },
        { code: '16-1219 TPG', name: 'Tuscany', hex: '#BE9785' },
        { code: '16-1422 TPG', name: 'Cork', hex: '#BA8671' },
        { code: '13-1109 TPG', name: 'Bisque', hex: '#EDCAB5' },
        { code: '15-1319 TPG', name: 'Almost Apricot', hex: '#E5B39B' },
        { code: '15-1318 TPG', name: 'Pink Sand', hex: '#DFB19B' },
        { code: '14-1220 TPG', name: 'Peach Nougat', hex: '#E6AF91' },
        { code: '15-1327 TPG', name: 'Peach Bloom', hex: '#D99B7C' },
        { code: '15-1322 TPG', name: 'Dusty Coral', hex: '#D29B83' },
        { code: '16-1220 TPG', name: 'Cafe Creme', hex: '#C79685' },
        { code: '16-1235 TPG', name: 'Sandstorm', hex: '#BD8B69' },
        { code: '16-1341 TPG', name: 'Butterum', hex: '#C68F65' },
        { code: '16-1336 TPG', name: 'Biscuit', hex: '#B4835B' },
        { code: '17-1137 TPG', name: 'Cashew', hex: '#A47149' },
        { code: '16-1432 TPG', name: 'Almond', hex: '#A7754D' },
        { code: '17-1330 TPG', name: 'Lion', hex: '#A0714F' },
        { code: '18-1030 TPG', name: 'Thrush', hex: '#936B4F' },
        { code: '17-1230 TPG', name: 'Mocha Mousse', hex: '#A47864' },
        { code: '17-1430 TPG', name: 'Pecan Brown', hex: '#A36E51' },
        { code: '17-1143 TPG', name: 'Hazel', hex: '#AE7250' },
        { code: '17-1336 TPG', name: 'Bran', hex: '#A66E4A' },
        { code: '17-1340 TPG', name: 'Adobe', hex: '#A3623B' },
        { code: '18-1142 TPG', name: 'Leather Brown', hex: '#97572B' },
        { code: '18-1154 TPG', name: 'Glazed Ginger', hex: '#91552B' },
        { code: '16-1328 TPG', name: 'Sandstone', hex: '#C48A69' },
        { code: '16-1439 TPG', name: 'Caramel', hex: '#C37C54' },
        { code: '17-1147 TPG', name: 'Amber Brown', hex: '#A66646' },
        { code: '18-1239 TPG', name: 'Sierra', hex: '#985C41' },
        { code: '18-1244 TPG', name: 'Ginger Bread', hex: '#8C4A2F' },
        { code: '18-1140 TPG', name: 'Mocha Bisque', hex: '#8C543A' },
        { code: '19-1241 TPG', name: 'Tortoise Shell', hex: '#754734' },
        { code: '16-1332 TPG', name: 'Pheasant', hex: '#C68463' },
        { code: '16-1429 TPG', name: 'Sunburn', hex: '#B37256' },
        { code: '17-1436 TPG', name: 'Raw Sienna', hex: '#B9714F' },
        { code: '17-1347 TPG', name: 'Autumn Leaf', hex: '#B56A4C' },
        { code: '18-1450 TPG', name: 'Mecca Orange', hex: '#BD5745' },
        { code: '18-1248 TPG', name: 'Rust', hex: '#B55A30' },
        { code: '18-1250 TPG', name: 'Bombay Brown', hex: '#9F5130' },
        { code: '13-1012 TPG', name: 'Frosted Almond', hex: '#D2C2AC' },
        { code: '14-1012 TPG', name: 'Gilded Beige', hex: '#B39F8D' },
        { code: '15-0927 TPG', name: 'Pale Gold', hex: '#BD9865' },
        { code: '16-0836 TPG', name: 'Rich Gold', hex: '#C8B273' },
        { code: '16-1325 TPG', name: 'Copper', hex: '#C47E5A' },
        { code: '18-1537 TPG', name: 'Copper Coin', hex: '#BA6B57' },
        { code: '14-5002 TPG', name: 'Silver', hex: '#A2A2A1' },
        { code: '17-1422 TPG', name: 'Raw Umber', hex: '#92705F' },
        { code: '18-1321 TPG', name: 'Brownie', hex: '#8F7265' },
        { code: '18-1314 TPG', name: 'Acorn', hex: '#7E5E52' },
        { code: '18-1320 TPG', name: 'Clove', hex: '#876155' },
        { code: '18-1229 TPG', name: 'Carob Brown', hex: '#855C4C' },
        { code: '18-1235 TPG', name: 'Russet', hex: '#8F5F50' },
        { code: '18-1137 TPG', name: 'Rawhide', hex: '#865E49' },
        { code: '18-1433 TPG', name: 'Chutney', hex: '#98594B' },
        { code: '18-1441 TPG', name: 'Baked Clay', hex: '#9C5642' },
        { code: '18-1336 TPG', name: 'Copper Brown', hex: '#9A6051' },
        { code: '18-1242 TPG', name: 'Brown Patina', hex: '#834F3D' },
        { code: '18-1238 TPG', name: 'Rustic Brown', hex: '#855141' },
        { code: '18-1230 TPG', name: 'Coconut Shell', hex: '#874E3C' },
        { code: '19-1333 TPG', name: 'Sequoia', hex: '#804839' },
        { code: '19-1228 TPG', name: 'Root Beer', hex: '#714A41' },
        { code: '19-1235 TPG', name: 'Brunette', hex: '#664238' },
        { code: '19-1320 TPG', name: 'Sable', hex: '#6E403C' },
        { code: '19-1436 TPG', name: 'Cinnamon', hex: '#6B4139' },
        { code: '19-1431 TPG', name: 'Fudgesickle', hex: '#63403A' },
        { code: '19-1430 TPG', name: 'Mink', hex: '#734B42' },
        { code: '19-1220 TPG', name: 'Cappuccino', hex: '#633F33' },
        { code: '18-1421 TPG', name: 'Cognac', hex: '#8B645A' },
        { code: '18-1326 TPG', name: 'Nutmeg', hex: '#7E5C54' },
        { code: '19-1012 TPG', name: 'French Roast', hex: '#58423F' },
        { code: '19-1420 TPG', name: 'Deep Mahogany', hex: '#553B39' },
        { code: '19-1321 TPG', name: 'Rum Raisin', hex: '#583432' },
        { code: '19-1322 TPG', name: 'Brown Stone', hex: '#593C39' },
        { code: '19-1317 TPG', name: 'Bitter Chocolate', hex: '#503130' },
        { code: '18-1425 TPG', name: 'Mahogany', hex: '#824D46' },
        { code: '19-1334 TPG', name: 'Henna', hex: '#7C423C' },
        { code: '19-1245 TPG', name: 'Arabian Spice', hex: '#884332' },
        { code: '19-1325 TPG', name: 'Hot Chocolate', hex: '#683B39' },
        { code: '19-1338 TPG', name: 'Russet Brown', hex: '#743332' },
        { code: '19-1331 TPG', name: 'Madder Brown', hex: '#6A3331' },
        { code: '19-1327 TPG', name: 'Andorra', hex: '#603535' },
        { code: '11-0510 TPG', name: 'Afterglow', hex: '#F3E6C9' },
        { code: '11-0617 TPG', name: 'Transparent Yellow', hex: '#F4ECC2' },
        { code: '12-0715 TPG', name: 'Double Cream', hex: '#F3E0AC' },
        { code: '13-0822 TPG', name: 'Sunlight', hex: '#EDD59E' },
        { code: '13-0922 TPG', name: 'Straw', hex: '#E0C992' },
        { code: '14-0935 TPG', name: 'Jojoba', hex: '#DABE81' },
        { code: '14-1031 TPG', name: 'Rattan', hex: '#D1B272' },
        { code: '14-1110 TPG', name: 'Boulder', hex: '#D1BE9B' },
        { code: '13-0715 TPG', name: 'Sea Mist', hex: '#D8C9A3' },
        { code: '13-0915 TPG', name: 'Reed Yellow', hex: '#DCC99E' },
        { code: '13-0613 TPG', name: 'Chino Green', hex: '#D9CAA5' },
        { code: '14-0925 TPG', name: 'Parsnip', hex: '#D6C69A' },
        { code: '12-0619 TPG', name: 'Dusty Yellow', hex: '#D4CC9A' },
        { code: '15-0719 TPG', name: 'Silver Fern', hex: '#BBAA7E' },
        { code: '12-0626 TPG', name: 'Lemon Grass', hex: '#DCD494' },
        { code: '13-0725 TPG', name: 'Raffia', hex: '#DAC483' },
        { code: '13-0624 TPG', name: 'Golden Mist', hex: '#D5CD94' },
        { code: '14-0826 TPG', name: 'Pampas', hex: '#CFBB7B' },
        { code: '14-0740 TPG', name: 'Bamboo', hex: '#D2B04C' },
        { code: '15-0643 TPG', name: 'Cress Green', hex: '#BCA949' },
        { code: '16-0847 TPG', name: 'Olive Oil', hex: '#A98B2D' },
        { code: '14-0626 TPG', name: 'Dried Moss', hex: '#CCB97E' },
        { code: '14-0647 TPG', name: 'Celery', hex: '#CEC153' },
        { code: '13-0640 TPG', name: 'Acacia', hex: '#DACD65' },
        { code: '14-0755 TPG', name: 'Sulphur', hex: '#DDB614' },
        { code: '15-0743 TPG', name: 'Oil Yellow', hex: '#C4A647' },
        { code: '16-0742 TPG', name: 'Green Sulphur', hex: '#AE8E2C' },
        { code: '17-0839 TPG', name: 'Golden Palm', hex: '#AA8805' },
        { code: '14-1025 TPG', name: 'Cocoon', hex: '#C9B27C' },
        { code: '14-0721 TPG', name: 'Hemp', hex: '#C0AD7C' },
        { code: '15-0730 TPG', name: 'Southern Moss', hex: '#BCA66A' },
        { code: '15-0732 TPG', name: 'Olivenite', hex: '#C1A65C' },
        { code: '15-0636 TPG', name: 'Golden Green', hex: '#BDB369' },
        { code: '16-0730 TPG', name: 'Antique Gold', hex: '#B59E5F' },
        { code: '16-0737 TPG', name: 'Burnished Gold', hex: '#AA9855' },
        { code: '12-0722 TPG', name: 'French Vanilla', hex: '#EFE1A7' },
        { code: '11-0616 TPG', name: 'Pastel Yellow', hex: '#F2E6B1' },
        { code: '11-0710 TPG', name: 'Tender Yellow', hex: '#EDEDB7' },
        { code: '11-0618 TPG', name: 'Wax Yellow', hex: '#EDE9AD' },
        { code: '12-0721 TPG', name: 'Lemonade', hex: '#F0E79D' },
        { code: '11-0620 TPG', name: 'Elfin Yellow', hex: '#EEEA97' },
        { code: '12-0740 TPG', name: 'Limelight', hex: '#F0E87D' },
        { code: '14-0827 TPG', name: 'Dusky Citron', hex: '#E3CC81' },
        { code: '14-0636 TPG', name: 'Muted Lime', hex: '#D1C87C' },
        { code: '13-0632 TPG', name: 'Endive', hex: '#D2CC81' },
        { code: '13-0720 TPG', name: 'Custard', hex: '#E5D68E' },
        { code: '12-0633 TPG', name: 'Canary Yellow', hex: '#DFD87E' },
        { code: '12-0738 TPG', name: 'Yellow Cream', hex: '#EFDC75' },
        { code: '13-0739 TPG', name: 'Cream Gold', hex: '#DEC05F' },
        { code: '12-0642 TPG', name: 'Aurora', hex: '#EDDD59' },
        { code: '13-0648 TPG', name: 'Green Sheen', hex: '#D9CE52' },
        { code: '13-0746 TPG', name: 'Maize', hex: '#EEC843' },
        { code: '12-0643 TPG', name: 'Blazing Yellow', hex: '#FEE715' },
        { code: '12-0752 TPG', name: 'Buttercup', hex: '#FAE03C' },
        { code: '14-0756 TPG', name: 'Empire Yellow', hex: '#F7D000' },
        { code: '13-0752 TPG', name: 'Lemon', hex: '#F3BF08' },
        { code: '14-0848 TPG', name: 'Mimosa', hex: '#F0C05A' },
        { code: '13-0850 TPG', name: 'Aspen Gold', hex: '#FFD662' },
        { code: '13-0758 TPG', name: 'Dandelion', hex: '#FFD02E' },
        { code: '13-0858 TPG', name: 'Vibrant Yellow', hex: '#FFDA29' },
        { code: '14-0760 TPG', name: 'Cyber Yellow', hex: '#FFD400' },
        { code: '14-0852 TPG', name: 'Freesia', hex: '#F3C12C' },
        { code: '13-0859 TPG', name: 'Lemon Chrome', hex: '#FFC300' },
        { code: '12-0720 TPG', name: 'Mellow Yellow', hex: '#F0DD9D' },
        { code: '12-0824 TPG', name: 'Pale Banana', hex: '#FAE199' },
        { code: '12-0825 TPG', name: 'Popcorn', hex: '#F8DE8D' },
        { code: '12-0727 TPG', name: 'Sunshine', hex: '#FADE85' },
        { code: '12-0736 TPG', name: 'Lemon Drop', hex: '#FDD878' },
        { code: '13-0755 TPG', name: 'Primrose Yellow', hex: '#F6D155' },
        { code: '14-0754 TPG', name: 'Super Lemon', hex: '#E4BF45' },
        { code: '14-0837 TPG', name: 'Misted Yellow', hex: '#DAB965' },
        { code: '15-0942 TPG', name: 'Sauterne', hex: '#C5A253' },
        { code: '16-0946 TPG', name: 'Honey', hex: '#BA9238' },
        { code: '16-0954 TPG', name: 'Arrowwood', hex: '#BC8D1F' },
        { code: '16-0953 TPG', name: 'Tawny Olive', hex: '#C4962C' },
        { code: '15-0850 TPG', name: 'Ceylon Yellow', hex: '#D4AE40' },
        { code: '15-0751 TPG', name: 'Lemon Curry', hex: '#CDA323' },
        { code: '15-1132 TPG', name: 'Fall Leaf', hex: '#C9A86A' },
        { code: '16-1126 TPG', name: 'Antelope', hex: '#B19664' },
        { code: '16-1133 TPG', name: 'Mustard Gold', hex: '#B08E51' },
        { code: '16-0948 TPG', name: 'Harvest Gold', hex: '#B68A3A' },
        { code: '16-0952 TPG', name: 'Nugget Gold', hex: '#C89720' },
        { code: '15-0948 TPG', name: 'Golden Spice', hex: '#C6973F' },
        { code: '15-0953 TPG', name: 'Golden Yellow', hex: '#CB8E16' },
        { code: '14-1036 TPG', name: 'Ochre', hex: '#D6AF66' },
        { code: '16-0945 TPG', name: 'Tinsel', hex: '#C3964D' },
        { code: '16-0947 TPG', name: 'Bright Gold', hex: '#CF9F52' },
        { code: '15-1142 TPG', name: 'Honey Gold', hex: '#D1A054' },
        { code: '16-1139 TPG', name: 'Amber Gold', hex: '#C19552' },
        { code: '15-1046 TPG', name: 'Mineral Yellow', hex: '#D39C43' },
        { code: '16-0950 TPG', name: 'Narcissus', hex: '#C39449' },
        { code: '14-1113 TPG', name: 'Marzipan', hex: '#D8C09D' },
        { code: '16-0928 TPG', name: 'Curry', hex: '#BE9E6F' },
        { code: '16-1326 TPG', name: 'Prairie Sand', hex: '#B59A6A' },
        { code: '17-1047 TPG', name: 'Honey Mustard', hex: '#B68F52' },
        { code: '17-1129 TPG', name: 'Wood Thrush', hex: '#A47D43' },
        { code: '18-0940 TPG', name: 'Golden Brown', hex: '#91672F' },
        { code: '18-0937 TPG', name: 'Bronze Brown', hex: '#825E2F' },
        { code: '17-1045 TPG', name: 'Apple Cinnamon', hex: '#B0885A' },
        { code: '17-1128 TPG', name: 'Bone Brown', hex: '#9D7446' },
        { code: '17-1125 TPG', name: 'Dijon', hex: '#97754C' },
        { code: '17-1036 TPG', name: 'Bistre', hex: '#98754A' },
        { code: '17-0942 TPG', name: 'Medal Bronze', hex: '#977547' },
        { code: '18-0939 TPG', name: 'Cumin', hex: '#927240' },
        { code: '19-1034 TPG', name: 'Breen', hex: '#795D34' },
        { code: '13-0840 TPG', name: 'Snapdragon', hex: '#FED777' },
        { code: '13-0941 TPG', name: 'Banana Cream', hex: '#FFCF73' },
        { code: '14-0850 TPG', name: 'Daffodil', hex: '#FDC04E' },
        { code: '14-0846 TPG', name: 'Yolk Yellow', hex: '#E2B051' },
        { code: '14-0951 TPG', name: 'Golden Rod', hex: '#E2A829' },
        { code: '15-0955 TPG', name: 'Old Gold', hex: '#ECA825' },
        { code: '14-0957 TPG', name: 'Spectra Yellow', hex: '#F7B718' },
        { code: '12-0826 TPG', name: 'Golden Haze', hex: '#FBD897' },
        { code: '14-0936 TPG', name: 'Sahara Sun', hex: '#DFC08A' },
        { code: '14-1038 TPG', name: 'New Wheat', hex: '#D7B57F' },
        { code: '13-0932 TPG', name: 'Cornsilk', hex: '#EDC373' },
        { code: '14-0847 TPG', name: 'Buff Yellow', hex: '#F1BF70' },
        { code: '13-0940 TPG', name: 'Sunset Gold', hex: '#F7C46C' },
        { code: '13-0939 TPG', name: 'Golden Cream', hex: '#F7B768' },
        { code: '13-1025 TPG', name: 'Impala', hex: '#F8CE97' },
        { code: '13-0935 TPG', name: 'Flax', hex: '#FFC87D' },
        { code: '13-0945 TPG', name: 'Pale Marigold', hex: '#FFC66E' },
        { code: '13-0942 TPG', name: 'Amber Yellow', hex: '#FAB75A' },
        { code: '14-1045 TPG', name: 'Amber', hex: '#EFAD55' },
        { code: '14-1041 TPG', name: 'Golden Apricot', hex: '#DDA758' },
        { code: '14-0941 TPG', name: 'Beeswax', hex: '#EBA851' },
        { code: '13-0947 TPG', name: 'Banana', hex: '#FCB953' },
        { code: '14-0955 TPG', name: 'Citrus', hex: '#F9AC2F' },
        { code: '15-1050 TPG', name: 'Golden Glow', hex: '#D99938' },
        { code: '15-1049 TPG', name: 'Artisans Gold', hex: '#F2AB46' },
        { code: '16-1054 TPG', name: 'Sunflower', hex: '#D39237' },
        { code: '18-0935 TPG', name: 'Buckthorn Brown', hex: '#A76F1F' },
        { code: '18-0950 TPG', name: 'Cathay Spice', hex: '#99642C' },
        { code: '16-0940 TPG', name: 'Taffy', hex: '#C39B6A' },
        { code: '16-1144 TPG', name: 'Oak Buff', hex: '#CF9C63' },
        { code: '16-1143 TPG', name: 'Honey Yellow', hex: '#CA9456' },
        { code: '17-1040 TPG', name: 'Spruce Yellow', hex: '#BE8A4A' },
        { code: '17-1048 TPG', name: 'Inca Gold', hex: '#BB7A2C' },
        { code: '18-1160 TPG', name: 'Sudan Brown', hex: '#AC6B29' },
        { code: '18-0933 TPG', name: 'Rubber', hex: '#815B37' },
        { code: '13-1016 TPG', name: 'Wheat', hex: '#DEC5A5' },
        { code: '13-1015 TPG', name: 'Honey Peach', hex: '#DCBD9E' },
        { code: '13-1018 TPG', name: 'Desert Dust', hex: '#E3BC8E' },
        { code: '12-0921 TPG', name: 'Golden Straw', hex: '#E6BD8F' },
        { code: '13-1024 TPG', name: 'Buff', hex: '#EBC396' },
        { code: '14-1127 TPG', name: 'Desert Mist', hex: '#E0B589' },
        { code: '15-1231 TPG', name: 'Clay', hex: '#D2A172' },
        { code: '12-0822 TPG', name: 'Golden Fleece', hex: '#F2D1A0' },
        { code: '13-1031 TPG', name: 'Apricot Sherbet', hex: '#FACD9E' },
        { code: '13-1030 TPG', name: 'Sunburst', hex: '#F6C289' },
        { code: '13-1027 TPG', name: 'Apricot Cream', hex: '#F1BD89' },
        { code: '14-1128 TPG', name: 'Buff Orange', hex: '#FFBB7C' },
        { code: '15-1145 TPG', name: 'Chamois', hex: '#F7B26A' },
        { code: '14-1051 TPG', name: 'Warm Apricot', hex: '#FFB865' },
        { code: '14-1050 TPG', name: 'Marigold', hex: '#FADC53' },
        { code: '16-1142 TPG', name: 'Golden Nugget', hex: '#DB9B59' },
        { code: '15-1147 TPG', name: 'Butterscotch', hex: '#E19640' },
        { code: '16-1148 TPG', name: 'Nugget', hex: '#CF8848' },
        { code: '16-1342 TPG', name: 'Buckskin', hex: '#D18E54' },
        { code: '16-1140 TPG', name: 'Yam', hex: '#D0893F' },
        { code: '17-1046 TPG', name: 'Golden Oak', hex: '#BE752D' },
        { code: '15-1062 TPG', name: 'Gold Fusion', hex: '#FFB000' },
        { code: '14-1064 TPG', name: 'Saffron', hex: '#FFA500' },
        { code: '15-1054 TPG', name: 'Cadmium Yellow', hex: '#EE9626' },
        { code: '14-1159 TPG', name: 'Zinnia', hex: '#FFA010' },
        { code: '15-1058 TPG', name: 'Radiant Yellow', hex: '#FC9E21' },
        { code: '15-1153 TPG', name: 'Apricot', hex: '#F19035' },
        { code: '15-1150 TPG', name: 'Dark Cheddar', hex: '#E08119' },
        { code: '13-1020 TPG', name: 'Apricot Ice', hex: '#FBBE99' },
        { code: '14-1133 TPG', name: 'Apricot Nectar', hex: '#ECAA79' },
        { code: '15-1234 TPG', name: 'Gold Earth', hex: '#DD9C6B' },
        { code: '15-1237 TPG', name: 'Apricot Tan', hex: '#DD9760' },
        { code: '16-1150 TPG', name: 'Topaz', hex: '#D08344' },
        { code: '16-1346 TPG', name: 'Golden Ochre', hex: '#C77943' },
        { code: '16-1443 TPG', name: 'Apricot Buff', hex: '#CD7E4D' },
        { code: '14-1231 TPG', name: 'Peach Cobbler', hex: '#FFB181' },
        { code: '14-1135 TPG', name: 'Salmon Buff', hex: '#FEAA7B' },
        { code: '14-1139 TPG', name: 'Pumpkin', hex: '#F5A26F' },
        { code: '15-1245 TPG', name: 'Mock Orange', hex: '#FFA368' },
        { code: '15-1242 TPG', name: 'Muskmelon', hex: '#EC935E' },
        { code: '16-1338 TPG', name: 'Copper Tan', hex: '#DE8E65' },
        { code: '16-1337 TPG', name: 'Coral Gold', hex: '#D27D56' },
        { code: '16-1255 TPG', name: 'Russet Orange', hex: '#E47127' },
        { code: '16-1253 TPG', name: 'Orange Ochre', hex: '#DC793A' },
        { code: '16-1350 TPG', name: 'Amberglow', hex: '#DC793E' },
        { code: '16-1454 TPG', name: 'Jaffa Orange', hex: '#D86D39' },
        { code: '17-1353 TPG', name: 'Apricot Orange', hex: '#C86B3C' },
        { code: '16-1448 TPG', name: 'Burnt Orange', hex: '#C86733' },
        { code: '16-1260 TPG', name: 'Harvest Pumpkin', hex: '#D56231' },
        { code: '15-1160 TPG', name: 'Blazing Orange', hex: '#FFA64F' },
        { code: '15-1157 TPG', name: 'Flame Orange', hex: '#FB8B23' },
        { code: '15-1164 TPG', name: 'Bright Marigold', hex: '#FF8D00' },
        { code: '15-1263 TPG', name: 'Autumn Glory', hex: '#FF8812' },
        { code: '16-1257 TPG', name: 'Sun Orange', hex: '#F48037' },
        { code: '16-1356 TPG', name: 'Persimmon Orange', hex: '#F47327' },
        { code: '17-1350 TPG', name: 'Orange Popsicle', hex: '#FF7913' },
        { code: '16-1343 TPG', name: 'Autumn Sunset', hex: '#F38554' },
        { code: '15-1247 TPG', name: 'Tangerine', hex: '#F88F58' },
        { code: '16-1357 TPG', name: 'Bird Of Paradise', hex: '#FF8C55' },
        { code: '16-1359 TPG', name: 'Orange Peel', hex: '#FA7A35' },
        { code: '16-1459 TPG', name: 'Mandarin Orange', hex: '#EC6A37' },
        { code: '16-1462 TPG', name: 'Golden Poppy', hex: '#F56733' },
        { code: '16-1364 TPG', name: 'Vibrant Orange', hex: '#FF7420' },
        { code: '16-1360 TPG', name: 'Nectarine', hex: '#FF8656' },
        { code: '16-1349 TPG', name: 'Coral Rose', hex: '#F3774D' },
        { code: '16-1361 TPG', name: 'Carrot', hex: '#FD6F3B' },
        { code: '16-1452 TPG', name: 'Firecracker', hex: '#F36944' },
        { code: '17-1464 TPG', name: 'Red Orange', hex: '#F05627' },
        { code: '16-1362 TPG', name: 'Vermillion Orange', hex: '#F9633B' },
        { code: '17-1462 TPG', name: 'Flame', hex: '#F2552C' },
        { code: '13-1026 TPG', name: 'Creampuff', hex: '#FFCDA8' },
        { code: '12-0917 TPG', name: 'Bleached Apricot', hex: '#FCCAAC' },
        { code: '13-1017 TPG', name: 'Almond Cream', hex: '#F4C29F' },
        { code: '14-1225 TPG', name: 'Beach Sand', hex: '#FBB995' },
        { code: '13-1019 TPG', name: 'Cream Blush', hex: '#F8C19A' },
        { code: '13-1022 TPG', name: 'Caramel Cream', hex: '#F4BA94' },
        { code: '13-1023 TPG', name: 'Peach Fuzz', hex: '#FFBE98' },
        { code: '13-1021 TPG', name: 'Prairie Sunset', hex: '#FFBB9E' },
        { code: '14-1224 TPG', name: 'Coral Sands', hex: '#EDAA86' },
        { code: '14-1230 TPG', name: 'Apricot Wash', hex: '#FBAC82' },
        { code: '15-1333 TPG', name: 'Canyon Sunset', hex: '#E1927A' },
        { code: '16-1340 TPG', name: 'Brandied Melon', hex: '#CE7B5B' },
        { code: '16-1435 TPG', name: 'Carnelian', hex: '#CE785D' },
        { code: '17-1446 TPG', name: 'Mango', hex: '#B75E41' },
        { code: '14-1227 TPG', name: 'Peach', hex: '#F2A987' },
        { code: '15-1239 TPG', name: 'Cantaloupe', hex: '#FFA177' },
        { code: '15-1331 TPG', name: 'Coral Reef', hex: '#FAA181' },
        { code: '15-1334 TPG', name: 'Shell Coral', hex: '#EA9575' },
        { code: '15-1340 TPG', name: 'Cadmium Orange', hex: '#F99471' },
        { code: '16-1442 TPG', name: 'Melon', hex: '#FE8863' },
        { code: '16-1344 TPG', name: 'Dusty Orange', hex: '#E27A53' },
        { code: '16-1441 TPG', name: 'Arabesque', hex: '#D16F52' },
        { code: '16-1440 TPG', name: 'Langoustino', hex: '#CA6C56' },
        { code: '17-1444 TPG', name: 'Ginger', hex: '#C96551' },
        { code: '16-1450 TPG', name: 'Flamingo', hex: '#DF7253' },
        { code: '18-1447 TPG', name: 'Orange Rust', hex: '#C25A3C' },
        { code: '18-1354 TPG', name: 'Burnt Ochre', hex: '#BB4F35' },
        { code: '18-1448 TPG', name: 'Chili', hex: '#BE5141' },
        { code: '18-1535 TPG', name: 'Ginger Spice', hex: '#B65D48' },
        { code: '18-1451 TPG', name: 'Autumn Glaze', hex: '#B3573F' },
        { code: '18-1343 TPG', name: 'Auburn', hex: '#A15843' },
        { code: '19-1250 TPG', name: 'Picante', hex: '#8D3F2D' },
        { code: '18-1444 TPG', name: 'Tandori Spice', hex: '#9F4440' },
        { code: '18-1540 TPG', name: 'Cinnabar', hex: '#9C453B' },
        { code: '18-1547 TPG', name: 'Bossa Nova', hex: '#973A36' },
        { code: '13-1318 TPG', name: 'Tropical Peach', hex: '#FFC4B2' },
        { code: '14-1219 TPG', name: 'Peach Parfait', hex: '#F8BFA8' },
        { code: '14-1318 TPG', name: 'Coral Pink', hex: '#E8A798' },
        { code: '14-1316 TPG', name: 'Dusty Pink', hex: '#DEAA9B' },
        { code: '16-1330 TPG', name: 'Muted Clay', hex: '#D29380' },
        { code: '15-1523 TPG', name: 'Shrimp', hex: '#E29A86' },
        { code: '17-1341 TPG', name: 'Tawny Orange', hex: '#D37F6F' },
        { code: '16-1329 TPG', name: 'Coral Haze', hex: '#E38E84' },
        { code: '16-1431 TPG', name: 'Canyon Clay', hex: '#CE8477' },
        { code: '16-1526 TPG', name: 'Terra Cotta', hex: '#D38377' },
        { code: '17-1524 TPG', name: 'Desert Sand', hex: '#BD7B74' },
        { code: '18-1436 TPG', name: 'Light Mahogany', hex: '#AD6D68' },
        { code: '17-1525 TPG', name: 'Cedar Wood', hex: '#A1655B' },
        { code: '18-1435 TPG', name: 'Withered Rose', hex: '#A26666' },
        { code: '16-1522 TPG', name: 'Rose Dawn', hex: '#C2877B' },
        { code: '17-1514 TPG', name: 'Ash Rose', hex: '#B5817D' },
        { code: '17-1518 TPG', name: 'Old Rose', hex: '#B47B77' },
        { code: '17-1424 TPG', name: 'Brick Dust', hex: '#B07069' },
        { code: '17-1520 TPG', name: 'Canyon Rose', hex: '#AF6C67' },
        { code: '18-1630 TPG', name: 'Dusty Cedar', hex: '#AD5D5D' },
        { code: '18-1438 TPG', name: 'Marsala', hex: '#964F4C' },
        { code: '17-1540 TPG', name: 'Apricot Brandy', hex: '#C26A5A' },
        { code: '17-1532 TPG', name: 'Aragon', hex: '#B06455' },
        { code: '18-1536 TPG', name: 'Hot Sauce', hex: '#AB4F41' },
        { code: '18-1346 TPG', name: 'Bruschetta', hex: '#A75949' },
        { code: '18-1434 TPG', name: 'Etruscan Red', hex: '#A2574B' },
        { code: '18-1443 TPG', name: 'Redwood', hex: '#A6594C' },
        { code: '18-1350 TPG', name: 'Burnt Brick', hex: '#A14D3A' },
        { code: '18-1629 TPG', name: 'Faded Rose', hex: '#BF6464' },
        { code: '18-1648 TPG', name: 'Baked Apple', hex: '#B34646' },
        { code: '18-1658 TPG', name: 'Pompeian Red', hex: '#A4292E' },
        { code: '18-1449 TPG', name: 'Ketchup', hex: '#9A382D' },
        { code: '18-1442 TPG', name: 'Red Ochre', hex: '#913832' },
        { code: '18-1531 TPG', name: 'Barn Red', hex: '#8F423B' },
        { code: '19-1540 TPG', name: 'Burnt Henna', hex: '#7E392F' },
        { code: '14-1419 TPG', name: 'Peach Pearl', hex: '#FFB2A5' },
        { code: '14-1418 TPG', name: 'Peach Melba', hex: '#FBBDAF' },
        { code: '14-1420 TPG', name: 'Apricot Blush', hex: '#FEAEA5' },
        { code: '14-1324 TPG', name: 'Peach Bud', hex: '#FDB2AB' },
        { code: '16-1434 TPG', name: 'Coral Almond', hex: '#E29D94' },
        { code: '16-1520 TPG', name: 'Lobster Bisque', hex: '#DD9289' },
        { code: '16-1624 TPG', name: 'Lantana', hex: '#DA7E7A' },
        { code: '14-1228 TPG', name: 'Peach Nectar', hex: '#FFB59B' },
        { code: '14-1323 TPG', name: 'Salmon', hex: '#FAAA94' },
        { code: '15-1423 TPG', name: 'Peach Amber', hex: '#FB9F93' },
        { code: '15-1435 TPG', name: 'Desert Flower', hex: '#FF9687' },
        { code: '15-1530 TPG', name: 'Peach Pink', hex: '#FA9A85' },
        { code: '16-1529 TPG', name: 'Burnt Coral', hex: '#E9897E' },
        { code: '16-1532 TPG', name: 'Crabapple', hex: '#D77E70' },
        { code: '15-1433 TPG', name: 'Papaya Punch', hex: '#FCA289' },
        { code: '16-1543 TPG', name: 'Fusion Coral', hex: '#FF8576' },
        { code: '16-1542 TPG', name: 'Fresh Salmon', hex: '#FF7F6A' },
        { code: '16-1544 TPG', name: 'Persimmon', hex: '#F67866' },
        { code: '16-1539 TPG', name: 'Coral', hex: '#ED7464' },
        { code: '16-1546 TPG', name: 'Living Coral', hex: '#FF6F61' },
        { code: '17-1656 TPG', name: 'Hot Coral', hex: '#F35B53' },
        { code: '16-1632 TPG', name: 'Shell Pink', hex: '#F88180' },
        { code: '16-1641 TPG', name: 'Georgia Peach', hex: '#F97272' },
        { code: '16-1640 TPG', name: 'Sugar Coral', hex: '#F56C73' },
        { code: '17-1647 TPG', name: 'Dubarry', hex: '#F25F66' },
        { code: '17-1643 TPG', name: 'Porcelain Rose', hex: '#EA6B6A' },
        { code: '17-1644 TPG', name: 'Spiced Coral', hex: '#D75C5D' },
        { code: '18-1649 TPG', name: 'Deep Sea Coral', hex: '#D9615B' },
        { code: '17-1635 TPG', name: 'Rose Of Sharon', hex: '#DC5B62' },
        { code: '18-1651 TPG', name: 'Cayenne', hex: '#E04951' },
        { code: '18-1762 TPG', name: 'Hibiscus', hex: '#DD3848' },
        { code: '17-1654 TPG', name: 'Poinsettia', hex: '#CB3441' },
        { code: '17-1641 TPG', name: 'Chrysanthemum', hex: '#BE454F' },
        { code: '17-1545 TPG', name: 'Cranberry', hex: '#BB4A4D' },
        { code: '18-1643 TPG', name: 'Cardinal', hex: '#AD3E48' },
        { code: '17-1456 TPG', name: 'Tigerlily', hex: '#E2583E' },
        { code: '17-1558 TPG', name: 'Grenadine', hex: '#DF3F32' },
        { code: '17-1562 TPG', name: 'Mandarin Red', hex: '#E74A33' },
        { code: '17-1564 TPG', name: 'Fiesta', hex: '#DD4132' },
        { code: '17-1563 TPG', name: 'Cherry Tomato', hex: '#EB3C27' },
        { code: '18-1561 TPG', name: 'Orange Com', hex: '#DA321C' },
        { code: '18-1445 TPG', name: 'Spicy Orange', hex: '#D73C26' },
        { code: '16-1541 TPG', name: 'Camellia', hex: '#F6745F' },
        { code: '16-1451 TPG', name: 'Nasturtium', hex: '#FE6347' },
        { code: '17-1547 TPG', name: 'Emberglow', hex: '#EA6759' },
        { code: '17-1544 TPG', name: 'Burnt Sienna', hex: '#C65D52' },
        { code: '17-1553 TPG', name: 'Paprika', hex: '#CE4D42' },
        { code: '18-1454 TPG', name: 'Red Clay', hex: '#C2452D' },
        { code: '18-1555 TPG', name: 'Molten Lava', hex: '#B5332E' },
        { code: '17-1663 TPG', name: 'Bittersweet', hex: '#D93744' },
        { code: '17-1664 TPG', name: 'Poppy Red', hex: '#DC343B' },
        { code: '18-1660 TPG', name: 'Tomato', hex: '#CE2939' },
        { code: '18-1664 TPG', name: 'Fiery Red', hex: '#D01C1F' },
        { code: '18-1662 TPG', name: 'Flame Scarlet', hex: '#CD212A' },
        { code: '18-1763 TPG', name: 'High Risk Red', hex: '#C71F2D' },
        { code: '18-1550 TPG', name: 'Aurora Red', hex: '#B93A32' },
        { code: '18-1652 TPG', name: 'Rococco Red', hex: '#BB363F' },
        { code: '18-1661 TPG', name: 'Tomato Puree', hex: '#C53346' },
        { code: '18-1764 TPG', name: 'Lollipop', hex: '#CC1C3B' },
        { code: '18-1761 TPG', name: 'Ski Patrol', hex: '#BB1237' },
        { code: '19-1760 TPG', name: 'Scarlet', hex: '#BC2B3D' },
        { code: '19-1764 TPG', name: 'Lipstick Red', hex: '#B31A38' },
        { code: '19-1762 TPG', name: 'Crimson', hex: '#AE0E36' },
        { code: '19-1763 TPG', name: 'Racing Red', hex: '#BD162C' },
        { code: '18-1655 TPG', name: 'Mars Red', hex: '#BC2731' },
        { code: '19-1761 TPG', name: 'Tango Red', hex: '#AC0E2E' },
        { code: '18-1663 TPG', name: 'Chinese Red', hex: '#BE132D' },
        { code: '19-1663 TPG', name: 'Ribbon Red', hex: '#B92636' },
        { code: '19-1664 TPG', name: 'True Red', hex: '#BF1932' },
        { code: '19-1557 TPG', name: 'Chili Pepper', hex: '#9B1B30' },
        { code: '14-1714 TPG', name: 'Quartz Pink', hex: '#EFA6AA' },
        { code: '15-1717 TPG', name: 'Pink Icing', hex: '#EEA0A6' },
        { code: '14-1513 TPG', name: 'Blossom', hex: '#F2B2AE' },
        { code: '14-1521 TPG', name: 'Peaches N Cream', hex: '#F4A6A3' },
        { code: '15-1621 TPG', name: 'Candlelight Peach', hex: '#F8A39D' },
        { code: '16-1720 TPG', name: 'Strawberry Ice', hex: '#E78B90' },
        { code: '16-1626 TPG', name: 'Peach Blossom', hex: '#DE8286' },
        { code: '15-1821 TPG', name: 'Flamingo Pink', hex: '#F7969E' },
        { code: '16-1723 TPG', name: 'Confetti', hex: '#E6798E' },
        { code: '17-1928 TPG', name: 'Bubblegum', hex: '#EA738D' },
        { code: '16-1735 TPG', name: 'Pink Lemonade', hex: '#EE6D8A' },
        { code: '17-1930 TPG', name: 'Camellia Rose', hex: '#EB6081' },
        { code: '17-1929 TPG', name: 'Rapture Rose', hex: '#D16277' },
        { code: '17-1927 TPG', name: 'Desert Rose', hex: '#CF6977' },
        { code: '15-1922 TPG', name: 'Geranium Pink', hex: '#F6909D' },
        { code: '15-1624 TPG', name: 'Conch Shell', hex: '#FC8F9B' },
        { code: '15-1626 TPG', name: 'Salmon Rose', hex: '#FF8D94' },
        { code: '16-1731 TPG', name: 'Strawberry Pink', hex: '#F57F8E' },
        { code: '17-1736 TPG', name: 'Sunkist Coral', hex: '#EA6676' },
        { code: '17-1744 TPG', name: 'Calypso Coral', hex: '#EE5C6C' },
        { code: '16-1620 TPG', name: 'Tea Rose', hex: '#DC7178' },
        { code: '17-1753 TPG', name: 'Geranium', hex: '#DA3D58' },
        { code: '17-1755 TPG', name: 'Paradise Pink', hex: '#E4445E' },
        { code: '18-1756 TPG', name: 'Teaberry', hex: '#DC3855' },
        { code: '18-1755 TPG', name: 'Rouge Red', hex: '#E24666' },
        { code: '18-1754 TPG', name: 'Raspberry', hex: '#D32E5E' },
        { code: '17-1842 TPG', name: 'Azalea', hex: '#D42E5B' },
        { code: '18-1856 TPG', name: 'Virtual Pink', hex: '#C6174E' },
        { code: '17-1740 TPG', name: 'Claret Red', hex: '#C84C61' },
        { code: '18-1741 TPG', name: 'Raspberry Wine', hex: '#B63753' },
        { code: '18-1852 TPG', name: 'Rose Red', hex: '#C92351' },
        { code: '18-1760 TPG', name: 'Barberry', hex: '#BF1945' },
        { code: '18-1945 TPG', name: 'Bright Rose', hex: '#C51959' },
        { code: '19-1860 TPG', name: 'Persian Red', hex: '#A21441' },
        { code: '19-1955 TPG', name: 'Cerise', hex: '#A41247' },
        { code: '13-2806 TPG', name: 'Pink Lady', hex: '#EFC1D6' },
        { code: '14-2710 TPG', name: 'Lilac Sachet', hex: '#E9ADCA' },
        { code: '14-2311 TPG', name: 'Prism Pink', hex: '#F0A1BF' },
        { code: '15-2215 TPG', name: 'Begonia Pink', hex: '#EC9ABE' },
        { code: '15-2718 TPG', name: 'Fuchsia Pink', hex: '#DF88B7' },
        { code: '15-2214 TPG', name: 'Rosebloom', hex: '#E290B2' },
        { code: '17-2520 TPG', name: 'Ibis Rose', hex: '#CA628F' },
        { code: '15-2216 TPG', name: 'Sachet Pink', hex: '#F18AAD' },
        { code: '16-2120 TPG', name: 'Wild Orchid', hex: '#D979A2' },
        { code: '15-2217 TPG', name: 'Aurora Pink', hex: '#E881A6' },
        { code: '17-2120 TPG', name: 'Chateau Rose', hex: '#D2738F' },
        { code: '15-1920 TPG', name: 'Morning Glory', hex: '#EE819F' },
        { code: '16-2126 TPG', name: 'Azalea Pink', hex: '#E96A97' },
        { code: '17-2127 TPG', name: 'Shocking Pink', hex: '#DE5B8C' },
        { code: '17-1937 TPG', name: 'Hot Pink', hex: '#E55982' },
        { code: '17-2033 TPG', name: 'Fandango Pink', hex: '#E04F80' },
        { code: '18-2120 TPG', name: 'Honeysuckle', hex: '#D94F70' },
        { code: '18-2043 TPG', name: 'Raspberry Sorbet', hex: '#D2386C' },
        { code: '17-1831 TPG', name: 'Carmine', hex: '#BC4869' },
        { code: '17-2031 TPG', name: 'Fuchsia Rose', hex: '#C74375' },
        { code: '18-2143 TPG', name: 'Beetroot Purple', hex: '#CF2D71' },
        { code: '16-2124 TPG', name: 'Pink Carnation', hex: '#ED7A9E' },
        { code: '17-2230 TPG', name: 'Carmine Rose', hex: '#E35B8F' },
        { code: '17-2036 TPG', name: 'Magenta', hex: '#D23C77' },
        { code: '18-2133 TPG', name: 'Pink Flambe', hex: '#D3507A' },
        { code: '18-2436 TPG', name: 'Fuchsia Purple', hex: '#D33479' },
        { code: '17-2227 TPG', name: 'Lilac Rose', hex: '#BD4275' },
        { code: '18-2336 TPG', name: 'Very Berry', hex: '#B73275' },
        { code: '17-2625 TPG', name: 'Super Pink', hex: '#CE6BA4' },
        { code: '17-2627 TPG', name: 'Phlox Pink', hex: '#CE5E9A' },
        { code: '18-2333 TPG', name: 'Raspberry Rose', hex: '#CC4385' },
        { code: '17-2624 TPG', name: 'Rose Violet', hex: '#C0428A' },
        { code: '18-2328 TPG', name: 'Fuchsia Red', hex: '#AB3475' },
        { code: '18-2326 TPG', name: 'Cactus Flower', hex: '#A83E6C' },
        { code: '18-2525 TPG', name: 'Magenta Haze', hex: '#9D446E' },
        { code: '11-2511 TPG', name: 'Shrinking Violet', hex: '#F4E1E6' },
        { code: '12-2904 TPG', name: 'Primrose Pink', hex: '#EED4D9' },
        { code: '14-1508 TPG', name: 'Silver Pink', hex: '#DCB1AF' },
        { code: '14-1511 TPG', name: 'Powder Pink', hex: '#ECB2B3' },
        { code: '16-1617 TPG', name: 'Mauveglow', hex: '#D18489' },
        { code: '16-1610 TPG', name: 'Brandied Apricot', hex: '#CA848A' },
        { code: '17-1718 TPG', name: 'Dusty Rose', hex: '#BA797D' },
        { code: '12-2102 TPG', name: 'Mauve Morn', hex: '#ECD6D6' },
        { code: '12-2902 TPG', name: 'Mauve Chalk', hex: '#E5D0CF' },
        { code: '12-1304 TPG', name: 'Pearl', hex: '#F9DBD8' },
        { code: '15-1611 TPG', name: 'Bridal Rose', hex: '#D69FA2' },
        { code: '15-1614 TPG', name: 'Blush', hex: '#D1969A' },
        { code: '18-1634 TPG', name: 'Baroque Rose', hex: '#B35A66' },
        { code: '18-1635 TPG', name: 'Slate Rose', hex: '#B45865' },
        { code: '17-1537 TPG', name: 'Mineral Red', hex: '#B35457' },
        { code: '18-1633 TPG', name: 'Garnet Rose', hex: '#AC4B55' },
        { code: '17-1633 TPG', name: 'Holly Berry', hex: '#B44E5D' },
        { code: '19-1759 TPG', name: 'American Beauty', hex: '#A73340' },
        { code: '19-1862 TPG', name: 'Jester Red', hex: '#9E1030' },
        { code: '19-1656 TPG', name: 'Rio Red', hex: '#8A2232' },
        { code: '19-1940 TPG', name: 'Rumba Red', hex: '#7C2439' },
        { code: '18-1631 TPG', name: 'Earth Red', hex: '#95424E' },
        { code: '19-1840 TPG', name: 'Deep Claret', hex: '#973443' },
        { code: '19-1655 TPG', name: 'Garnet', hex: '#953640' },
        { code: '19-1543 TPG', name: 'Brick Red', hex: '#8C373E' },
        { code: '19-1532 TPG', name: 'Rosewood', hex: '#813639' },
        { code: '19-1934 TPG', name: 'Tibetan Red', hex: '#782A39' },
        { code: '19-1650 TPG', name: 'Biking Red', hex: '#77212E' },
        { code: '18-1426 TPG', name: 'Apple Butter', hex: '#844B4D' },
        { code: '19-1524 TPG', name: 'Oxblood Red', hex: '#70393F' },
        { code: '19-1533 TPG', name: 'Cowhide', hex: '#884344' },
        { code: '19-1530 TPG', name: 'Burnt Russet', hex: '#7E3940' },
        { code: '19-1629 TPG', name: 'Ruby Wine', hex: '#77333B' },
        { code: '19-1726 TPG', name: 'Cordovan', hex: '#702F3B' },
        { code: '19-1725 TPG', name: 'Tawny Port', hex: '#5C2C35' },
        { code: '13-1407 TPG', name: 'Creole Pink', hex: '#F7D5CC' },
        { code: '13-1504 TPG', name: 'Peach Blush', hex: '#E4CCC6' },
        { code: '13-1406 TPG', name: 'Cloud Pink', hex: '#F5D1C8' },
        { code: '12-1212 TPG', name: 'Veiled Rose', hex: '#F8CDC9' },
        { code: '12-1207 TPG', name: 'Pearl Blush', hex: '#F4CEC5' },
        { code: '13-1310 TPG', name: 'English Rose', hex: '#F4C6C3' },
        { code: '14-1905 TPG', name: 'Lotus', hex: '#E2C1C0' },
        { code: '11-1408 TPG', name: 'Rosewater', hex: '#F6DBD8' },
        { code: '14-1309 TPG', name: 'Peach Whip', hex: '#DBBEB7' },
        { code: '14-1506 TPG', name: 'Rose Smoke', hex: '#D3B4AD' },
        { code: '15-1415 TPG', name: 'Coral Cloud', hex: '#E2A9A1' },
        { code: '15-1512 TPG', name: 'Misty Rose', hex: '#CAA39A' },
        { code: '15-1516 TPG', name: 'Peach Beige', hex: '#D3A297' },
        { code: '16-1516 TPG', name: 'Cameo Brown', hex: '#C08A80' },
        { code: '13-1409 TPG', name: 'Seashell Pink', hex: '#F7C8C2' },
        { code: '13-1408 TPG', name: 'Chintz Rose', hex: '#EEC4BE' },
        { code: '13-1510 TPG', name: 'Impatiens Pink', hex: '#FFC4BC' },
        { code: '14-1907 TPG', name: 'Peachskin', hex: '#DFB8B6' },
        { code: '15-1515 TPG', name: 'Mellow Rose', hex: '#D9A6A1' },
        { code: '16-1511 TPG', name: 'Rose Tan', hex: '#D19C97' },
        { code: '16-1518 TPG', name: 'Rosette', hex: '#CE8E8B' },
        { code: '17-1522 TPG', name: 'Mauvewood', hex: '#A75D67' },
        { code: '17-1623 TPG', name: 'Rose Wine', hex: '#A4596D' },
        { code: '17-1723 TPG', name: 'Malaga', hex: '#9F5069' },
        { code: '18-1725 TPG', name: 'Dry Rose', hex: '#8C4759' },
        { code: '18-1718 TPG', name: 'Hawthorn Rose', hex: '#884C5E' },
        { code: '18-1619 TPG', name: 'Maroon', hex: '#834655' },
        { code: '18-1420 TPG', name: 'Wild Ginger', hex: '#7C4C53' },
        { code: '19-2047 TPG', name: 'Sangria', hex: '#982551' },
        { code: '19-1850 TPG', name: 'Red Bud', hex: '#962D49' },
        { code: '18-2027 TPG', name: 'Beaujolais', hex: '#80304C' },
        { code: '19-2033 TPG', name: 'Anemone', hex: '#842C48' },
        { code: '19-2030 TPG', name: 'Beet Red', hex: '#7A1F3D' },
        { code: '19-2025 TPG', name: 'Red Plum', hex: '#7C2946' },
        { code: '19-2024 TPG', name: 'Rhododendron', hex: '#722B3F' },
        { code: '12-2906 TPG', name: 'Barely Pink', hex: '#F8D7DD' },
        { code: '12-1310 TPG', name: 'Blushing Bride', hex: '#FBD3D9' },
        { code: '12-2905 TPG', name: 'Cradle Pink', hex: '#EDD0DD' },
        { code: '13-2803 TPG', name: 'Pale Lilac', hex: '#E1C6CC' },
        { code: '13-1904 TPG', name: 'Chalk Pink', hex: '#E6C5CA' },
        { code: '12-2903 TPG', name: 'Light Lilac', hex: '#DEC6D3' },
        { code: '14-2305 TPG', name: 'Pink Nectar', hex: '#D8AAB7' },
        { code: '12-1305 TPG', name: 'Heavenly Pink', hex: '#F4DEDE' },
        { code: '13-2004 TPG', name: 'Potpourri', hex: '#E7C9CA' },
        { code: '12-1605 TPG', name: 'Crystal Pink', hex: '#EDD0CE' },
        { code: '12-1706 TPG', name: 'Pink Dogwood', hex: '#F7D1D1' },
        { code: '12-1708 TPG', name: 'Crystal Rose', hex: '#FDC3C6' },
        { code: '13-2005 TPG', name: 'Strawberry Cream', hex: '#F4C3C4' },
        { code: '13-1513 TPG', name: 'Gossamer Pink', hex: '#FAC8C3' },
        { code: '13-1906 TPG', name: 'Rose Shadow', hex: '#F9C2CD' },
        { code: '13-2010 TPG', name: 'Orchid Pink', hex: '#F3BBCA' },
        { code: '13-2006 TPG', name: 'Almond Blossom', hex: '#F5BEC7' },
        { code: '14-1909 TPG', name: 'Coral Blush', hex: '#E6B2B8' },
        { code: '14-1911 TPG', name: 'Candy Pink', hex: '#F5B0BD' },
        { code: '15-1816 TPG', name: 'Peony', hex: '#ED9CA8' },
        { code: '15-1912 TPG', name: 'Sea Pink', hex: '#DE98AB' },
        { code: '16-2215 TPG', name: 'Cashmere Rose', hex: '#CE879F' },
        { code: '16-1715 TPG', name: 'Wild Rose', hex: '#CE8498' },
        { code: '15-2210 TPG', name: 'Orchid Smoke', hex: '#D294AA' },
        { code: '16-1712 TPG', name: 'Polignac', hex: '#C28799' },
        { code: '16-1708 TPG', name: 'Lilas', hex: '#B88995' },
        { code: '16-2111 TPG', name: 'Mauve Orchid', hex: '#B58299' },
        { code: '16-2107 TPG', name: 'Orchid Haze', hex: '#B0879B' },
        { code: '13-2804 TPG', name: 'Parfait Pink', hex: '#E9C3CF' },
        { code: '13-2805 TPG', name: 'Pink Mist', hex: '#E6BCCD' },
        { code: '14-2307 TPG', name: 'Cameo Pink', hex: '#DBA9B8' },
        { code: '14-2808 TPG', name: 'Sweet Lilac', hex: '#E8B5CE' },
        { code: '14-3207 TPG', name: 'Pink Lavender', hex: '#D9AFCA' },
        { code: '14-3209 TPG', name: 'Pastel Lavender', hex: '#D8A1C4' },
        { code: '15-3214 TPG', name: 'Orchid', hex: '#D198C5' },
        { code: '15-2913 TPG', name: 'Lilac Chiffon', hex: '#DE9BC4' },
        { code: '16-2614 TPG', name: 'Moonlite Mauve', hex: '#D28FB0' },
        { code: '16-3118 TPG', name: 'Cyclamen', hex: '#D687BA' },
        { code: '16-3116 TPG', name: 'Opera Mauve', hex: '#CA80B1' },
        { code: '16-3115 TPG', name: 'Crocus', hex: '#C67FAE' },
        { code: '17-3014 TPG', name: 'Mulberry', hex: '#A76C97' },
        { code: '18-3025 TPG', name: 'Striking Purple', hex: '#944E87' },
        { code: '16-3320 TPG', name: 'Violet', hex: '#C17FB5' },
        { code: '17-3323 TPG', name: 'Iris Orchid', hex: '#A767A2' },
        { code: '18-3224 TPG', name: 'Radiant Orchid', hex: '#AD5E99' },
        { code: '17-3020 TPG', name: 'Spring Crocus', hex: '#BA69A1' },
        { code: '18-3230 TPG', name: 'Meadow Mauve', hex: '#A9568C' },
        { code: '18-3015 TPG', name: 'Amethyst', hex: '#864D75' },
        { code: '19-2428 TPG', name: 'Magenta Purple', hex: '#6B264B' },
        { code: '17-3023 TPG', name: 'Rosebud', hex: '#B65F9A' },
        { code: '18-3027 TPG', name: 'Purple Orchid', hex: '#AD4D8C' },
        { code: '19-2434 TPG', name: 'Festival Fuchsia', hex: '#9E2C6A' },
        { code: '18-2527 TPG', name: 'Baton Rouge', hex: '#973C6C' },
        { code: '19-2431 TPG', name: 'Boysenberry', hex: '#85325C' },
        { code: '19-2432 TPG', name: 'Raspberry Radiance', hex: '#802A50' },
        { code: '19-2430 TPG', name: 'Purple Potion', hex: '#692746' },
        { code: '17-2617 TPG', name: 'Dahlia Mauve', hex: '#A64F82' },
        { code: '18-3339 TPG', name: 'Vivid Viola', hex: '#993C7C' },
        { code: '19-2630 TPG', name: 'Wild Aster', hex: '#92316F' },
        { code: '18-3022 TPG', name: 'Deep Orchid', hex: '#903F75' },
        { code: '18-2320 TPG', name: 'Clover', hex: '#8A3371' },
        { code: '18-2929 TPG', name: 'Purple Wine', hex: '#8C3573' },
        { code: '19-2924 TPG', name: 'Hollyhock', hex: '#823270' },
        { code: '18-3331 TPG', name: 'Hyacinth Violet', hex: '#8D4687' },
        { code: '18-3324 TPG', name: 'Dahlia', hex: '#843E83' },
        { code: '19-3336 TPG', name: 'Sparkling Grape', hex: '#773376' },
        { code: '19-3138 TPG', name: 'Byzantium', hex: '#853B7B' },
        { code: '19-2820 TPG', name: 'Phlox', hex: '#692D5D' },
        { code: '19-3230 TPG', name: 'Grape Juice', hex: '#682961' },
        { code: '19-3022 TPG', name: 'Gloxinia', hex: '#622E5A' },
        { code: '13-3801 TPG', name: 'Crystal Gray', hex: '#D7CBC4' },
        { code: '14-1305 TPG', name: 'Mushroom', hex: '#BDACA3' },
        { code: '16-1509 TPG', name: 'Shadow Gray', hex: '#BBA5A0' },
        { code: '16-1703 TPG', name: 'Sphinx', hex: '#AB9895' },
        { code: '16-1506 TPG', name: 'Bark', hex: '#A99592' },
        { code: '16-1510 TPG', name: 'Fawn', hex: '#AE9490' },
        { code: '16-1508 TPG', name: 'Adobe Rose', hex: '#BA9F99' },
        { code: '15-1607 TPG', name: 'Pale Mauve', hex: '#C6A4A4' },
        { code: '16-1806 TPG', name: 'Woodrose', hex: '#AE8C8E' },
        { code: '16-1707 TPG', name: 'Deauville Mauve', hex: '#AF9294' },
        { code: '18-1807 TPG', name: 'Twilight Mauve', hex: '#8B6F70' },
        { code: '18-1612 TPG', name: 'Rose Taupe', hex: '#806062' },
        { code: '18-1512 TPG', name: 'Rose Brown', hex: '#80565B' },
        { code: '18-1616 TPG', name: 'Roan Rouge', hex: '#885157' },
        { code: '17-1510 TPG', name: 'Antler', hex: '#957A76' },
        { code: '18-1409 TPG', name: 'Peppercorn', hex: '#6C5656' },
        { code: '19-1606 TPG', name: 'Raisin', hex: '#524144' },
        { code: '19-1620 TPG', name: 'Huckleberry', hex: '#5B4349' },
        { code: '19-1621 TPG', name: 'Catawba Grape', hex: '#5D3C43' },
        { code: '19-1518 TPG', name: 'Puce', hex: '#503938' },
        { code: '19-1619 TPG', name: 'Fudge', hex: '#493338' },
        { code: '15-1511 TPG', name: 'Mahogany Rose', hex: '#C5A193' },
        { code: '17-1516 TPG', name: 'Burlwood', hex: '#9B716B' },
        { code: '18-1415 TPG', name: 'Marron', hex: '#6E4C4B' },
        { code: '19-1625 TPG', name: 'Decadent Chocolate', hex: '#513235' },
        { code: '19-1521 TPG', name: 'Red Mahogany', hex: '#60373D' },
        { code: '19-1623 TPG', name: 'Vineyard Wine', hex: '#58363D' },
        { code: '19-2118 TPG', name: 'Winetasting', hex: '#492A34' },
        { code: '19-1525 TPG', name: 'Port', hex: '#663336' },
        { code: '19-1526 TPG', name: 'Chocolate Truffle', hex: '#612E35' },
        { code: '19-1617 TPG', name: 'Burgundy', hex: '#64313E' },
        { code: '19-1522 TPG', name: 'Zinfandel', hex: '#5C2935' },
        { code: '19-1528 TPG', name: 'Windsor Wine', hex: '#582B36' },
        { code: '19-1627 TPG', name: 'Port Royale', hex: '#502B33' },
        { code: '19-1718 TPG', name: 'Fig', hex: '#532D3B' },
        { code: '15-2706 TPG', name: 'Violet Ice', hex: '#C2ACB1' },
        { code: '15-1905 TPG', name: 'Burnished Lilac', hex: '#C5AEB1' },
        { code: '15-2705 TPG', name: 'Keepsake Lilac', hex: '#C0A5AE' },
        { code: '16-3205 TPG', name: 'Mauve Shadows', hex: '#B598A3' },
        { code: '15-2205 TPG', name: 'Dawn Pink', hex: '#BFA3AF' },
        { code: '14-3204 TPG', name: 'Fragrant Lilac', hex: '#CEADBE' },
        { code: '15-3207 TPG', name: 'Mauve Mist', hex: '#C49BD4' },
        { code: '17-1608 TPG', name: 'Heather Rose', hex: '#AD6D7F' },
        { code: '17-1818 TPG', name: 'Red Violet', hex: '#A35776' },
        { code: '17-1612 TPG', name: 'Mellow Mauve', hex: '#996378' },
        { code: '17-1710 TPG', name: 'Bordeaux', hex: '#96637B' },
        { code: '18-1720 TPG', name: 'Violet Quartz', hex: '#8B4963' },
        { code: '18-1716 TPG', name: 'Damson', hex: '#854C65' },
        { code: '19-2410 TPG', name: 'Amaranth', hex: '#6F3C56' },
        { code: '15-1906 TPG', name: 'Zephyr', hex: '#C89FA5' },
        { code: '17-1610 TPG', name: 'Dusky Orchid', hex: '#9A7182' },
        { code: '18-2109 TPG', name: 'Grape Shake', hex: '#886971' },
        { code: '17-1511 TPG', name: 'Wistful Mauve', hex: '#946C74' },
        { code: '18-1709 TPG', name: 'Tulipwood', hex: '#805466' },
        { code: '18-1710 TPG', name: 'Grape Nectar', hex: '#8D5C74' },
        { code: '18-3011 TPG', name: 'Argyle Purple', hex: '#895C79' },
        { code: '17-1512 TPG', name: 'Nostalgia Rose', hex: '#A4777E' },
        { code: '17-1614 TPG', name: 'Deco Rose', hex: '#985F68' },
        { code: '18-1613 TPG', name: 'Renaissance Rose', hex: '#865560' },
        { code: '18-1614 TPG', name: 'Nocturne', hex: '#7A4B56' },
        { code: '18-1418 TPG', name: 'Crushed Berry', hex: '#804F5A' },
        { code: '19-2312 TPG', name: 'Crushed Violets', hex: '#643A4C' },
        { code: '19-1716 TPG', name: 'Mauve Wine', hex: '#5B3644' },
        { code: '18-1411 TPG', name: 'Plum Wine', hex: '#674550' },
        { code: '19-2311 TPG', name: 'Eggplant', hex: '#613F4C' },
        { code: '19-2014 TPG', name: 'Prune', hex: '#603749' },
        { code: '19-1608 TPG', name: 'Prune Purple', hex: '#5C3A4D' },
        { code: '19-2315 TPG', name: 'Grape Wine', hex: '#5A2F43' },
        { code: '19-2514 TPG', name: 'Italian Plum', hex: '#533146' },
        { code: '19-2520 TPG', name: 'Potent Purple', hex: '#462639' },
        { code: '16-3310 TPG', name: 'Lavender Herb', hex: '#B18EAA' },
        { code: '16-3307 TPG', name: 'Lavender Mist', hex: '#AE90A7' },
        { code: '17-3410 TPG', name: 'Valerian', hex: '#9F7A93' },
        { code: '18-3220 TPG', name: 'Very Grape', hex: '#927288' },
        { code: '18-3211 TPG', name: 'Grapeade', hex: '#85677B' },
        { code: '18-3012 TPG', name: 'Purple Gumdrop', hex: '#7A596F' },
        { code: '18-3013 TPG', name: 'Berry Conserve', hex: '#765269' },
        { code: '18-3418 TPG', name: 'Chinese Violet', hex: '#835E81' },
        { code: '18-3522 TPG', name: 'Crushed Grape', hex: '#7A547F' },
        { code: '18-3218 TPG', name: 'Concord Grape', hex: '#7C5379' },
        { code: '19-3424 TPG', name: 'Sunset Purple', hex: '#6F456E' },
        { code: '19-3325 TPG', name: 'Wood Violet', hex: '#75406A' },
        { code: '19-3223 TPG', name: 'Purple Passion', hex: '#683D62' },
        { code: '19-2524 TPG', name: 'Dark Purple', hex: '#582147' },
        { code: '18-3415 TPG', name: 'Grape Jam', hex: '#725671' },
        { code: '19-3323 TPG', name: 'Deep Purple', hex: '#50314C' },
        { code: '19-2814 TPG', name: 'Wineberry', hex: '#5A395B' },
        { code: '19-3518 TPG', name: 'Grape Royale', hex: '#4F2D54' },
        { code: '19-3218 TPG', name: 'Plum Purple', hex: '#51304E' },
        { code: '19-2009 TPG', name: 'Hortensia', hex: '#553B50' },
        { code: '19-2816 TPG', name: 'Blackberry Wine', hex: '#4D3246' },
        { code: '19-3714 TPG', name: 'Navy Cosmos', hex: '#503B53' },
        { code: '19-3215 TPG', name: 'Indigo', hex: '#4C3957' },
        { code: '19-3519 TPG', name: 'Purple Pennant', hex: '#432C47' },
        { code: '19-3316 TPG', name: 'Plum Perfect', hex: '#473442' },
        { code: '19-3619 TPG', name: 'Sweet Grape', hex: '#4B3B4F' },
        { code: '19-3217 TPG', name: 'Shadow Purple', hex: '#4E334E' },
        { code: '19-3520 TPG', name: 'Blackberry Cordial', hex: '#3F2A47' },
        { code: '19-3620 TPG', name: 'Purple Reign', hex: '#56456B' },
        { code: '19-3722 TPG', name: 'Mulberry Purple', hex: '#493C62' },
        { code: '19-3720 TPG', name: 'Gothic Grape', hex: '#473951' },
        { code: '19-3728 TPG', name: 'Grape', hex: '#433455' },
        { code: '19-3617 TPG', name: 'Mysterioso', hex: '#46394B' },
        { code: '19-3725 TPG', name: 'Purple Velvet', hex: '#41354D' },
        { code: '19-3712 TPG', name: 'Nightshade', hex: '#433748' },
        { code: '13-3802 TPG', name: 'Orchid Tint', hex: '#DBD2DB' },
        { code: '13-3803 TPG', name: 'Lilac Ash', hex: '#D7CDCD' },
        { code: '13-3804 TPG', name: 'Gray Lilac', hex: '#D4CACD' },
        { code: '14-3803 TPG', name: 'Hushed Violet', hex: '#D1C0BF' },
        { code: '15-3802 TPG', name: 'Cloud Gray', hex: '#B7A9AC' },
        { code: '17-1505 TPG', name: 'Quail', hex: '#98868C' },
        { code: '17-3808 TPG', name: 'Nirvana', hex: '#A2919B' },
        { code: '13-3805 TPG', name: 'Orchid Hush', hex: '#CEC3D2' },
        { code: '14-3805 TPG', name: 'Iris', hex: '#BAAFBC' },
        { code: '16-3304 TPG', name: 'Sea Fog', hex: '#A5929D' },
        { code: '17-1605 TPG', name: 'Elderberry', hex: '#9D848E' },
        { code: '18-1706 TPG', name: 'Black Plum', hex: '#6C5765' },
        { code: '18-1405 TPG', name: 'Flint', hex: '#705861' },
        { code: '19-1624 TPG', name: 'Sassafras', hex: '#54353B' },
        { code: '14-3904 TPG', name: 'Evening Haze', hex: '#BDB8C7' },
        { code: '14-3907 TPG', name: 'Thistle', hex: '#B9B3C5' },
        { code: '17-3910 TPG', name: 'Lavender Gray', hex: '#9890A2' },
        { code: '17-3906 TPG', name: 'Minimal Gray', hex: '#948D99' },
        { code: '17-3810 TPG', name: 'Purple Ash', hex: '#8F8395' },
        { code: '18-3710 TPG', name: 'Gray Ridge', hex: '#847986' },
        { code: '18-3712 TPG', name: 'Purple Sage', hex: '#75697E' },
        { code: '16-3812 TPG', name: 'Heirloom Lilac', hex: '#9D96B2' },
        { code: '16-3810 TPG', name: 'Wisteria', hex: '#A198AF' },
        { code: '17-3812 TPG', name: 'Dusk', hex: '#897F98' },
        { code: '17-3817 TPG', name: 'Daybreak', hex: '#8981A0' },
        { code: '18-3812 TPG', name: 'Cadet', hex: '#6A6378' },
        { code: '18-3714 TPG', name: 'Mulled Grape', hex: '#675A74' },
        { code: '19-3716 TPG', name: 'Purple Plumeria', hex: '#473854' },
        { code: '14-3903 TPG', name: 'Lilac Marble', hex: '#C3BABF' },
        { code: '15-0703 TPG', name: 'Ashes Of Roses', hex: '#B5ACAB' },
        { code: '16-3803 TPG', name: 'Gull Gray', hex: '#A49CA0' },
        { code: '17-2601 TPG', name: 'Zinc', hex: '#92898A' },
        { code: '17-3802 TPG', name: 'Gull', hex: '#918C8F' },
        { code: '18-1703 TPG', name: 'Shark', hex: '#6D636B' },
        { code: '18-1404 TPG', name: 'Sparrow', hex: '#69595C' },
        { code: '13-3406 TPG', name: 'Orchid Ice', hex: '#E0D0DB' },
        { code: '13-3405 TPG', name: 'Lilac Snow', hex: '#E0C7D7' },
        { code: '14-3206 TPG', name: 'Winsome Orchid', hex: '#D4B9CB' },
        { code: '15-3508 TPG', name: 'Fair Orchid', hex: '#C0AAC0' },
        { code: '15-3507 TPG', name: 'Lavender Frost', hex: '#BDABBE' },
        { code: '14-3710 TPG', name: 'Orchid Petal', hex: '#BFB4CB' },
        { code: '14-3812 TPG', name: 'Pastel Lilac', hex: '#BDB0D0' },
        { code: '14-3612 TPG', name: 'Orchid Bloom', hex: '#C5AECF' },
        { code: '15-3412 TPG', name: 'Orchid Bouquet', hex: '#D1ACCE' },
        { code: '16-3521 TPG', name: 'Lupine', hex: '#BE9CC1' },
        { code: '16-3416 TPG', name: 'Violet Tulle', hex: '#C193C0' },
        { code: '16-3617 TPG', name: 'Sheer Lilac', hex: '#B793C0' },
        { code: '16-3520 TPG', name: 'African Violet', hex: '#B085B7' },
        { code: '17-3313 TPG', name: 'Dusty Lavender', hex: '#A1759C' },
        { code: '17-3730 TPG', name: 'Paisley Purple', hex: '#8B79B1' },
        { code: '17-3619 TPG', name: 'Hyacinth', hex: '#936CA7' },
        { code: '17-3628 TPG', name: 'Amethyst Orchid', hex: '#926AA6' },
        { code: '18-3533 TPG', name: 'Dewberry', hex: '#8B5987' },
        { code: '18-3520 TPG', name: 'Purple Heart', hex: '#745587' },
        { code: '19-3526 TPG', name: 'Meadow Violet', hex: '#764F82' },
        { code: '19-3642 TPG', name: 'Royal Purple', hex: '#603F83' },
        { code: '18-3633 TPG', name: 'Deep Lavender', hex: '#775496' },
        { code: '18-3531 TPG', name: 'Royal Lilac', hex: '#774D8E' },
        { code: '19-3542 TPG', name: 'Pansy', hex: '#653D7C' },
        { code: '19-3438 TPG', name: 'Bright Violet', hex: '#784384' },
        { code: '19-3536 TPG', name: 'Amaranth Purple', hex: '#6A397B' },
        { code: '19-3540 TPG', name: 'Purple Magic', hex: '#663271' },
        { code: '19-3220 TPG', name: 'Plum', hex: '#5A315D' },
        { code: '18-3615 TPG', name: 'Imperial Palace', hex: '#604E7A' },
        { code: '18-3518 TPG', name: 'Patrician Purple', hex: '#6C4E79' },
        { code: '19-3622 TPG', name: 'Loganberry', hex: '#5A4769' },
        { code: '19-3514 TPG', name: 'Majesty', hex: '#593761' },
        { code: '19-3528 TPG', name: 'Imperial Purple', hex: '#542C5D' },
        { code: '19-3640 TPG', name: 'Crown Jewel', hex: '#482D54' },
        { code: '19-3731 TPG', name: 'Parachute Purple', hex: '#392852' },
        { code: '13-3820 TPG', name: 'Lavender Fog', hex: '#D2C4D6' },
        { code: '15-3620 TPG', name: 'Lavendula', hex: '#BCA4CB' },
        { code: '15-3817 TPG', name: 'Lavender', hex: '#AFA4CE' },
        { code: '17-3725 TPG', name: 'Bougainvillea', hex: '#9884B9' },
        { code: '16-3823 TPG', name: 'Violet Tulip', hex: '#9E91C3' },
        { code: '17-3615 TPG', name: 'Chalk Violet', hex: '#8F7DA5' },
        { code: '18-3718 TPG', name: 'Purple Haze', hex: '#807396' },
        { code: '16-3110 TPG', name: 'Smoky Grape', hex: '#B88AAC' },
        { code: '16-3525 TPG', name: 'Regal Orchid', hex: '#A98BAF' },
        { code: '16-3815 TPG', name: 'Viola', hex: '#A692BA' },
        { code: '17-3612 TPG', name: 'Orchid Mist', hex: '#917798' },
        { code: '18-3513 TPG', name: 'Grape Compote', hex: '#6B5876' },
        { code: '18-3715 TPG', name: 'Montana Grape', hex: '#6C5971' },
        { code: '18-3410 TPG', name: 'Vintage Violet', hex: '#634F62' },
        { code: '17-3826 TPG', name: 'Aster Purple', hex: '#7D74A8' },
        { code: '17-3834 TPG', name: 'Dahlia Purple', hex: '#7E6EAC' },
        { code: '18-3737 TPG', name: 'Passion Flower', hex: '#6D5698' },
        { code: '18-3838 TPG', name: 'Ultra Violet', hex: '#5F4B8B' },
        { code: '19-3748 TPG', name: 'Prism Violet', hex: '#53357D' },
        { code: '19-3737 TPG', name: 'Heliotrope', hex: '#4F3872' },
        { code: '19-3632 TPG', name: 'Petunia', hex: '#4F3466' },
        { code: '18-3828 TPG', name: 'Corsican Blue', hex: '#646093' },
        { code: '18-3834 TPG', name: 'Veronica', hex: '#6D6695' },
        { code: '18-3943 TPG', name: 'Blue Iris', hex: '#5A5B9F' },
        { code: '18-3840 TPG', name: 'Purple Opulence', hex: '#60569A' },
        { code: '19-3730 TPG', name: 'Gentian Violet', hex: '#544275' },
        { code: '19-3850 TPG', name: 'Liberty', hex: '#4D448A' },
        { code: '19-3847 TPG', name: 'Deep Blue', hex: '#44377D' },
        { code: '18-3930 TPG', name: 'Bleached Denim', hex: '#646F9B' },
        { code: '18-3817 TPG', name: 'Heron', hex: '#62617E' },
        { code: '19-3936 TPG', name: 'Skipper Blue', hex: '#484A72' },
        { code: '19-3832 TPG', name: 'Navy Blue', hex: '#403F6F' },
        { code: '19-3842 TPG', name: 'Deep Wisteria', hex: '#443F6F' },
        { code: '19-3839 TPG', name: 'Blue Ribbon', hex: '#3A395F' },
        { code: '19-3830 TPG', name: 'Astral Aura', hex: '#363151' },
        { code: '13-4105 TPG', name: 'Lilac Hint', hex: '#D0D0DA' },
        { code: '15-3807 TPG', name: 'Misty Lilac', hex: '#BCB4C4' },
        { code: '14-3905 TPG', name: 'Lavender Blue', hex: '#C5C0D0' },
        { code: '14-3911 TPG', name: 'Purple Heather', hex: '#BAB8D3' },
        { code: '15-3909 TPG', name: 'Cosmic Sky', hex: '#AAAAC4' },
        { code: '15-3910 TPG', name: 'Languid Lavender', hex: '#A2A1BA' },
        { code: '16-3907 TPG', name: 'Dapple Gray', hex: '#9C9BA7' },
        { code: '16-3931 TPG', name: 'Sweet Lavender', hex: '#9A9BC1' },
        { code: '16-3925 TPG', name: 'Easter Egg', hex: '#919BC9' },
        { code: '17-3930 TPG', name: 'Jacaranda', hex: '#848DC5' },
        { code: '17-3932 TPG', name: 'Deep Periwinkle', hex: '#7C83BC' },
        { code: '18-3833 TPG', name: 'Dusted Peri', hex: '#696BA0' },
        { code: '18-3944 TPG', name: 'Violet Storm', hex: '#5C619D' },
        { code: '18-3946 TPG', name: 'Baja Blue', hex: '#5F6DB0' },
        { code: '16-3930 TPG', name: 'Thistle Down', hex: '#9499BB' },
        { code: '17-3925 TPG', name: 'Persian Violet', hex: '#8C8EB2' },
        { code: '18-3820 TPG', name: 'Twilight Purple', hex: '#66648B' },
        { code: '19-3947 TPG', name: 'Orient Blue', hex: '#47457A' },
        { code: '19-3951 TPG', name: 'Clematis Blue', hex: '#363B7C' },
        { code: '19-3955 TPG', name: 'Royal Blue', hex: '#3D428B' },
        { code: '18-3963 TPG', name: 'Spectrum Blue', hex: '#3D3C7C' },
        { code: '17-3924 TPG', name: 'Lavender Violet', hex: '#767BA5' },
        { code: '17-3922 TPG', name: 'Blue Ice', hex: '#70789B' },
        { code: '18-3927 TPG', name: 'Velvet Morning', hex: '#60688D' },
        { code: '18-3932 TPG', name: 'Marlin', hex: '#515B87' },
        { code: '19-3939 TPG', name: 'Blueprint', hex: '#2D3359' },
        { code: '19-3940 TPG', name: 'Blue Depths', hex: '#263056' },
        { code: '19-3933 TPG', name: 'Medieval Blue', hex: '#29304E' },
        { code: '16-3911 TPG', name: 'Lavender Aura', hex: '#9F99AA' },
        { code: '17-3917 TPG', name: 'Stonewash', hex: '#74809A' },
        { code: '19-3919 TPG', name: 'Nightshadow Blue', hex: '#4E5368' },
        { code: '19-3928 TPG', name: 'Blue Indigo', hex: '#49516D' },
        { code: '19-3915 TPG', name: 'Graystone', hex: '#4D495B' },
        { code: '19-3926 TPG', name: 'Crown Blue', hex: '#464B65' },
        { code: '19-3935 TPG', name: 'Deep Cobalt', hex: '#404466' },
        { code: '13-4110 TPG', name: 'Arctic Ice', hex: '#BFC7D6' },
        { code: '14-4106 TPG', name: 'Gray Dawn', hex: '#BBC1CC' },
        { code: '14-4110 TPG', name: 'Heather', hex: '#B7C0D6' },
        { code: '16-3919 TPG', name: 'Eventide', hex: '#959EB7' },
        { code: '17-4030 TPG', name: 'Silver Lake Blue', hex: '#618BB9' },
        { code: '17-3936 TPG', name: 'Blue Bonnet', hex: '#6384B8' },
        { code: '18-3937 TPG', name: 'Blue Yonder', hex: '#5A77A8' },
        { code: '16-3920 TPG', name: 'Lavender Lustre', hex: '#8C9CC1' },
        { code: '17-3919 TPG', name: 'Purple Impression', hex: '#858FB1' },
        { code: '16-3929 TPG', name: 'Grapemist', hex: '#8398CA' },
        { code: '15-3930 TPG', name: 'Vista Blue', hex: '#81A0D4' },
        { code: '16-4031 TPG', name: 'Cornflower Blue', hex: '#7391C8' },
        { code: '17-3934 TPG', name: 'Persian Jewel', hex: '#6E81BE' },
        { code: '18-3935 TPG', name: 'Wedgewood', hex: '#6479B3' },
        { code: '14-4112 TPG', name: 'Skyway', hex: '#ADBED3' },
        { code: '14-4115 TPG', name: 'Cashmere Blue', hex: '#A5B8D0' },
        { code: '14-4121 TPG', name: 'Blue Bell', hex: '#93B4D7' },
        { code: '15-3920 TPG', name: 'Placid Blue', hex: '#8CADD3' },
        { code: '16-4020 TPG', name: 'Della Robbia Blue', hex: '#7A9DCB' },
        { code: '16-4032 TPG', name: 'Provence', hex: '#658DC6' },
        { code: '17-4037 TPG', name: 'Ultramarine', hex: '#5B7EBD' },
        { code: '16-4021 TPG', name: 'Allure', hex: '#7291B4' },
        { code: '17-3923 TPG', name: 'Colony Blue', hex: '#65769A' },
        { code: '18-4027 TPG', name: 'Moonlight Blue', hex: '#506886' },
        { code: '18-3928 TPG', name: 'Dutch Blue', hex: '#4A638D' },
        { code: '19-4039 TPG', name: 'Delft', hex: '#3D5E8C' },
        { code: '19-4044 TPG', name: 'Limoges', hex: '#243F6C' },
        { code: '19-4027 TPG', name: 'Estate Blue', hex: '#233658' },
        { code: '17-4015 TPG', name: 'Infinity', hex: '#6E7E99' },
        { code: '18-3921 TPG', name: 'Bijou Blue', hex: '#4E5E7F' },
        { code: '18-3920 TPG', name: 'Coastal Fjord', hex: '#505D7E' },
        { code: '19-4030 TPG', name: 'True Navy', hex: '#3F5277' },
        { code: '19-4026 TPG', name: 'Ensign Blue', hex: '#384C67' },
        { code: '19-4118 TPG', name: 'Dark Denim', hex: '#35465E' },
        { code: '19-4028 TPG', name: 'Insignia Blue', hex: '#2F3E55' },
        { code: '15-4319 TPG', name: 'Air Blue', hex: '#77ACC7' },
        { code: '16-4127 TPG', name: 'Heritage Blue', hex: '#5D96BC' },
        { code: '15-4323 TPG', name: 'Ethereal Blue', hex: '#5CA6CE' },
        { code: '16-4134 TPG', name: 'Bonnie Blue', hex: '#539CCC' },
        { code: '17-4131 TPG', name: 'Cendre Blue', hex: '#3E7FA5' },
        { code: '18-4036 TPG', name: 'Parisian Blue', hex: '#4F7CA4' },
        { code: '18-4232 TPG', name: 'Faience', hex: '#2A6A8B' },
        { code: '15-4225 TPG', name: 'Alaskan Blue', hex: '#6DA9D2' },
        { code: '16-4132 TPG', name: 'Little Boy Blue', hex: '#6EA2D5' },
        { code: '17-4139 TPG', name: 'Azure Blue', hex: '#4D91C6' },
        { code: '17-4027 TPG', name: 'Riviera', hex: '#5879A2' },
        { code: '18-4029 TPG', name: 'Federal Blue', hex: '#43628B' },
        { code: '18-4041 TPG', name: 'Star Sapphire', hex: '#386192' },
        { code: '19-4037 TPG', name: 'Bright Cobalt', hex: '#385D8D' },
        { code: '16-4120 TPG', name: 'Dusk Blue', hex: '#7BA0C0' },
        { code: '18-4039 TPG', name: 'Regatta', hex: '#487AB7' },
        { code: '18-4043 TPG', name: 'Palace Blue', hex: '#346CB0' },
        { code: '18-4051 TPG', name: 'Strong Blue', hex: '#1F5DA0' },
        { code: '19-4053 TPG', name: 'Turkish Sea', hex: '#195190' },
        { code: '19-4056 TPG', name: 'Olympian Blue', hex: '#1A4C8B' },
        { code: '19-4052 TPG', name: 'Classic Blue', hex: '#0F4C81' },
        { code: '17-4041 TPG', name: 'Marina', hex: '#4F84C4' },
        { code: '18-4141 TPG', name: 'Campanula', hex: '#3272AF' },
        { code: '18-4045 TPG', name: 'Daphne', hex: '#0F5F9A' },
        { code: '18-4148 TPG', name: 'Victoria Blue', hex: '#08589D' },
        { code: '19-4049 TPG', name: 'Snorkel Blue', hex: '#034F84' },
        { code: '19-4050 TPG', name: 'Nautical Blue', hex: '#1A5091' },
        { code: '19-4150 TPG', name: 'Princess Blue', hex: '#00539C' },
        { code: '18-3949 TPG', name: 'Dazzling Blue', hex: '#3850A0' },
        { code: '18-3945 TPG', name: 'Amparo Blue', hex: '#4960A8' },
        { code: '19-3950 TPG', name: 'Deep Ultramarine', hex: '#384883' },
        { code: '19-3952 TPG', name: 'Surf The Web', hex: '#203C7F' },
        { code: '19-3864 TPG', name: 'Mazarine Blue', hex: '#273C76' },
        { code: '19-4057 TPG', name: 'True Blue', hex: '#1E4477' },
        { code: '19-3938 TPG', name: 'Twilight Blue', hex: '#313D64' },
        { code: '15-3915 TPG', name: 'Kentucky Blue', hex: '#A5B3CC' },
        { code: '15-4020 TPG', name: 'Cerulean', hex: '#9BB7D4' },
        { code: '14-4214 TPG', name: 'Powder Blue', hex: '#96B3D2' },
        { code: '16-4019 TPG', name: 'Forever Blue', hex: '#899BB8' },
        { code: '17-3915 TPG', name: 'Tempest', hex: '#79839B' },
        { code: '17-3918 TPG', name: 'Country Blue', hex: '#717F9B' },
        { code: '17-3920 TPG', name: 'English Manor', hex: '#7181A4' },
        { code: '13-4103 TPG', name: 'Illusion Blue', hex: '#C9D3DC' },
        { code: '13-4304 TPG', name: 'Ballad Blue', hex: '#C0CEDA' },
        { code: '13-4308 TPG', name: 'Baby Blue', hex: '#B5C7D3' },
        { code: '14-4210 TPG', name: 'Celestial Blue', hex: '#A3B4C4' },
        { code: '15-4008 TPG', name: 'Blue Fog', hex: '#9BABBB' },
        { code: '18-3916 TPG', name: 'Flint Stone', hex: '#677283' },
        { code: '18-3910 TPG', name: 'Folkstone Gray', hex: '#626879' },
        { code: '14-4206 TPG', name: 'Pearl Blue', hex: '#B0B7BE' },
        { code: '17-4405 TPG', name: 'Monument', hex: '#84898C' },
        { code: '19-4220 TPG', name: 'Dark Slate', hex: '#46515A' },
        { code: '19-4110 TPG', name: 'Midnight Navy', hex: '#34414E' },
        { code: '19-4010 TPG', name: 'Total Eclipse', hex: '#2C313D' },
        { code: '19-4015 TPG', name: 'Blue Graphite', hex: '#323137' },
        { code: '19-4013 TPG', name: 'Dark Navy', hex: '#232F36' },
        { code: '13-4404 TPG', name: 'Ice Flow', hex: '#C6D2D2' },
        { code: '15-4305 TPG', name: 'Quarry', hex: '#98A0A5' },
        { code: '17-5102 TPG', name: 'Griffin', hex: '#8D8F8F' },
        { code: '19-3906 TPG', name: 'Dark Shadow', hex: '#4A4B4D' },
        { code: '19-4014 TPG', name: 'Ombre Blue', hex: '#434854' },
        { code: '19-4019 TPG', name: 'India Ink', hex: '#3C3F4A' },
        { code: '19-4104 TPG', name: 'Ebony', hex: '#41424A' },
        { code: '19-3925 TPG', name: 'Patriot Blue', hex: '#363756' },
        { code: '19-3810 TPG', name: 'Eclipse', hex: '#343148' },
        { code: '19-4025 TPG', name: 'Mood Indigo', hex: '#353A4C' },
        { code: '19-3920 TPG', name: 'Peacoat', hex: '#2B2E43' },
        { code: '19-3921 TPG', name: 'Black Iris', hex: '#2B3042' },
        { code: '19-4024 TPG', name: 'Dress Blues', hex: '#2A3244' },
        { code: '19-4023 TPG', name: 'Blue Nights', hex: '#363B48' },
        { code: '15-4105 TPG', name: 'Angel Falls', hex: '#A3BDD3' },
        { code: '15-4005 TPG', name: 'Dream Blue', hex: '#A0BCD0' },
        { code: '16-4013 TPG', name: 'Ashley Blue', hex: '#8699AB' },
        { code: '16-4010 TPG', name: 'Dusty Blue', hex: '#8C9DAD' },
        { code: '19-4227 TPG', name: 'Indian Teal', hex: '#3C586B' },
        { code: '19-4316 TPG', name: 'Stargazer', hex: '#39505C' },
        { code: '19-4229 TPG', name: 'Orion Blue', hex: '#3E4F5C' },
        { code: '15-4312 TPG', name: 'Forget Me Not', hex: '#8FADBD' },
        { code: '17-4021 TPG', name: 'Faded Denim', hex: '#798EA4' },
        { code: '17-4020 TPG', name: 'Blue Shadow', hex: '#66829A' },
        { code: '18-3922 TPG', name: 'Coronet Blue', hex: '#59728E' },
        { code: '18-4020 TPG', name: 'Captains Blue', hex: '#557088' },
        { code: '18-4025 TPG', name: 'Copen Blue', hex: '#516B84' },
        { code: '18-3918 TPG', name: 'China Blue', hex: '#546477' },
        { code: '17-4320 TPG', name: 'Adriatic Blue', hex: '#5C899B' },
        { code: '18-4220 TPG', name: 'Provincial Blue', hex: '#5C798E' },
        { code: '17-4123 TPG', name: 'Niagara', hex: '#5487A4' },
        { code: '17-4023 TPG', name: 'Blue Heaven', hex: '#5B7E98' },
        { code: '18-4026 TPG', name: 'Stellar', hex: '#46647E' },
        { code: '18-4018 TPG', name: 'Real Teal', hex: '#405D73' },
        { code: '19-4125 TPG', name: 'Majolica Blue', hex: '#274357' },
        { code: '12-4609 TPG', name: 'Starlight Blue', hex: '#B5CED4' },
        { code: '14-4307 TPG', name: 'Winter Sky', hex: '#A9C0CB' },
        { code: '14-4508 TPG', name: 'Stratosphere', hex: '#9EC1CC' },
        { code: '15-4309 TPG', name: 'Sterling Blue', hex: '#A2B9C2' },
        { code: '16-4109 TPG', name: 'Arona', hex: '#879BA3' },
        { code: '17-4111 TPG', name: 'Citadel', hex: '#748995' },
        { code: '18-4215 TPG', name: 'Blue Mirage', hex: '#5C6D7C' },
        { code: '14-4306 TPG', name: 'Cloud Blue', hex: '#A2B6B9' },
        { code: '14-4506 TPG', name: 'Ether', hex: '#9EB6B8' },
        { code: '16-4414 TPG', name: 'Cameo Blue', hex: '#769DA6' },
        { code: '16-4114 TPG', name: 'Stone Blue', hex: '#829CA5' },
        { code: '16-4411 TPG', name: 'Tourmaline', hex: '#86A1A9' },
        { code: '17-4412 TPG', name: 'Smoke Blue', hex: '#6D8994' },
        { code: '18-4217 TPG', name: 'Bluestone', hex: '#577284' },
        { code: '14-4313 TPG', name: 'Aquamarine', hex: '#9DC3D4' },
        { code: '14-4318 TPG', name: 'Sky Blue', hex: '#8ABAD3' },
        { code: '15-4415 TPG', name: 'Milky Blue', hex: '#72A8BA' },
        { code: '15-4421 TPG', name: 'Blue Grotto', hex: '#5CACCE' },
        { code: '15-4427 TPG', name: 'Norse Blue', hex: '#4CA5C7' },
        { code: '16-4530 TPG', name: 'Aquarius', hex: '#3CADD4' },
        { code: '16-4525 TPG', name: 'Maui Blue', hex: '#52A2B4' },
        { code: '16-4421 TPG', name: 'Blue Mist', hex: '#5BACC3' },
        { code: '15-4720 TPG', name: 'River Blue', hex: '#38AFCD' },
        { code: '16-4529 TPG', name: 'Cyan Blue', hex: '#14A3C7' },
        { code: '16-4427 TPG', name: 'Horizon Blue', hex: '#289DBE' },
        { code: '17-4328 TPG', name: 'Blue Moon', hex: '#3686A0' },
        { code: '17-4427 TPG', name: 'Bluejay', hex: '#157EA0' },
        { code: '18-4334 TPG', name: 'Mediterranean Blue', hex: '#1478A7' },
        { code: '14-4522 TPG', name: 'Bachelor Button', hex: '#4ABBD5' },
        { code: '16-4535 TPG', name: 'Blue Atoll', hex: '#00B1D2' },
        { code: '17-4432 TPG', name: 'Vivid Blue', hex: '#0088B0' },
        { code: '17-4540 TPG', name: 'Hawaiian Ocean', hex: '#008DB9' },
        { code: '17-4440 TPG', name: 'Blue Danube', hex: '#0087B6' },
        { code: '18-4535 TPG', name: 'Blue Jewel', hex: '#007BAA' },
        { code: '18-4537 TPG', name: 'Methyl Blue', hex: '#0074A8' },
        { code: '17-4435 TPG', name: 'Malibu Blue', hex: '#008CC1' },
        { code: '17-4336 TPG', name: 'Blithe', hex: '#0084BD' },
        { code: '18-4330 TPG', name: 'Swedish Blue', hex: '#007EB1' },
        { code: '17-4433 TPG', name: 'Dresden Blue', hex: '#0086BB' },
        { code: '17-4247 TPG', name: 'Diva Blue', hex: '#007BB2' },
        { code: '18-4252 TPG', name: 'Blue Aster', hex: '#0077B3' },
        { code: '18-4440 TPG', name: 'Cloisonne', hex: '#0075AF' },
        { code: '18-4140 TPG', name: 'French Blue', hex: '#0072B5' },
        { code: '18-4247 TPG', name: 'Brilliant Blue', hex: '#0075B3' },
        { code: '18-4244 TPG', name: 'Directoire Blue', hex: '#0061A3' },
        { code: '19-4151 TPG', name: 'Skydiver', hex: '#00589B' },
        { code: '19-4245 TPG', name: 'Imperial Blue', hex: '#005A92' },
        { code: '18-4032 TPG', name: 'Deep Water', hex: '#266691' },
        { code: '19-4035 TPG', name: 'Dark Blue', hex: '#305679' },
        { code: '12-4607 TPG', name: 'Pastel Blue', hex: '#BCD3D5' },
        { code: '12-4608 TPG', name: 'Clearwater', hex: '#AAD5DB' },
        { code: '13-4409 TPG', name: 'Blue Glow', hex: '#B2D4DD' },
        { code: '13-4809 TPG', name: 'Plume', hex: '#A5CFD5' },
        { code: '14-4512 TPG', name: 'Porcelain Blue', hex: '#95C0CB' },
        { code: '13-4411 TPG', name: 'Crystal Blue', hex: '#A1C8DB' },
        { code: '14-4516 TPG', name: 'Petit Four', hex: '#87C2D4' },
        { code: '12-4805 TPG', name: 'Wan Blue', hex: '#CBDCDF' },
        { code: '12-4610 TPG', name: 'Whispering Blue', hex: '#C9DCDC' },
        { code: '12-4604 TPG', name: 'Skylight', hex: '#C8E0E0' },
        { code: '14-4510 TPG', name: 'Aquatic', hex: '#99C1CC' },
        { code: '15-4712 TPG', name: 'Marine Blue', hex: '#76AFB6' },
        { code: '16-4612 TPG', name: 'Reef Waters', hex: '#6F9FA9' },
        { code: '17-4911 TPG', name: 'Arctic', hex: '#648589' },
        { code: '12-4806 TPG', name: 'Chalk Blue', hex: '#CCDAD7' },
        { code: '13-4804 TPG', name: 'Pale Blue', hex: '#C4D6D3' },
        { code: '13-4405 TPG', name: 'Misty Blue', hex: '#BFCDCC' },
        { code: '14-4504 TPG', name: 'Sky Gray', hex: '#BCC8C6' },
        { code: '14-4807 TPG', name: 'Surf Spray', hex: '#B4C8C2' },
        { code: '15-4706 TPG', name: 'Gray Mist', hex: '#99AEAE' },
        { code: '15-5207 TPG', name: 'Aquifer', hex: '#89ACAC' },
        { code: '12-5206 TPG', name: 'Blue Glass', hex: '#C6E3E1' },
        { code: '13-5306 TPG', name: 'Icy Morn', hex: '#B0D3D1' },
        { code: '14-4810 TPG', name: 'Canal Blue', hex: '#9CC2C5' },
        { code: '13-5309 TPG', name: 'Pastel Turquoise', hex: '#99C5C4' },
        { code: '15-5209 TPG', name: 'Aqua Haze', hex: '#87B9BC' },
        { code: '15-4715 TPG', name: 'Aqua Sea', hex: '#6BAAAE' },
        { code: '16-5121 TPG', name: 'Meadowbrook', hex: '#60A0A3' },
        { code: '12-5505 TPG', name: 'Glacier', hex: '#C3DBD4' },
        { code: '12-5409 TPG', name: 'Fair Aqua', hex: '#B8E2DC' },
        { code: '12-5209 TPG', name: 'Soothing Sea', hex: '#C3E9E4' },
        { code: '12-5410 TPG', name: 'Bleached Aqua', hex: '#BCE3DF' },
        { code: '13-4909 TPG', name: 'Blue Light', hex: '#ACDFDD' },
        { code: '13-4910 TPG', name: 'Blue Tint', hex: '#9FD9D7' },
        { code: '14-4811 TPG', name: 'Aqua Sky', hex: '#7BC4C4' },
        { code: '12-5204 TPG', name: 'Morning Mist', hex: '#CFDFDB' },
        { code: '14-4908 TPG', name: 'Harbor Gray', hex: '#A8C0BB' },
        { code: '14-4809 TPG', name: 'Eggshell Blue', hex: '#A3CCC9' },
        { code: '16-5114 TPG', name: 'Dusty Turquoise', hex: '#649B9E' },
        { code: '16-4719 TPG', name: 'Porcelain', hex: '#5D9CA4' },
        { code: '18-5610 TPG', name: 'Brittany Blue', hex: '#4C7E86' },
        { code: '18-4718 TPG', name: 'Hydro', hex: '#426972' },
        { code: '15-4707 TPG', name: 'Blue Haze', hex: '#A5BCBB' },
        { code: '15-5210 TPG', name: 'Nile Blue', hex: '#76A7AB' },
        { code: '16-4712 TPG', name: 'Mineral Blue', hex: '#6D9192' },
        { code: '17-4818 TPG', name: 'Bristol Blue', hex: '#558F91' },
        { code: '17-4919 TPG', name: 'Teal', hex: '#478589' },
        { code: '18-5308 TPG', name: 'Blue Spruce', hex: '#486B67' },
        { code: '18-5612 TPG', name: 'Sagebrush Green', hex: '#567572' },
        { code: '16-5806 TPG', name: 'Green Milieu', hex: '#8A9992' },
        { code: '16-5304 TPG', name: 'Jadeite', hex: '#95A69F' },
        { code: '16-5106 TPG', name: 'Blue Surf', hex: '#90A8A4' },
        { code: '17-5111 TPG', name: 'Oil Blue', hex: '#658C88' },
        { code: '17-5110 TPG', name: 'Trellis', hex: '#6A8988' },
        { code: '18-4612 TPG', name: 'North Atlantic', hex: '#536D70' },
        { code: '18-5112 TPG', name: 'Sea Pine', hex: '#4C6969' },
        { code: '16-4408 TPG', name: 'Slate', hex: '#8C9FA1' },
        { code: '16-4706 TPG', name: 'Silver Blue', hex: '#8A9A9A' },
        { code: '16-4404 TPG', name: 'Abyss', hex: '#8F9E9D' },
        { code: '17-4408 TPG', name: 'Lead', hex: '#7A898F' },
        { code: '18-4711 TPG', name: 'Stormy Sea', hex: '#6E8082' },
        { code: '18-4510 TPG', name: 'Trooper', hex: '#697A7E' },
        { code: '18-4011 TPG', name: 'Goblin Blue', hex: '#5F7278' },
        { code: '16-5804 TPG', name: 'Slate Gray', hex: '#8A9691' },
        { code: '17-5107 TPG', name: 'Chinois Green', hex: '#7C8C87' },
        { code: '18-5611 TPG', name: 'Dark Forest', hex: '#556962' },
        { code: '18-5606 TPG', name: 'Balsam Green', hex: '#576664' },
        { code: '19-0312 TPG', name: 'Beetle', hex: '#55584C' },
        { code: '19-5004 TPG', name: 'Urban Chic', hex: '#464E4D' },
        { code: '19-5212 TPG', name: 'Darkest Spruce', hex: '#303D3C' },
        { code: '19-4318 TPG', name: 'Mallard Blue', hex: '#3A5C6E' },
        { code: '18-4530 TPG', name: 'Celestial', hex: '#006380' },
        { code: '18-4225 TPG', name: 'Saxony Blue', hex: '#1F6680' },
        { code: '19-4340 TPG', name: 'Lyons Blue', hex: '#005871' },
        { code: '19-4234 TPG', name: 'Ink Blue', hex: '#0B5369' },
        { code: '19-4329 TPG', name: 'Corsair', hex: '#18576C' },
        { code: '19-4324 TPG', name: 'Legion Blue', hex: '#1F495B' },
        { code: '18-4320 TPG', name: 'Aegean Blue', hex: '#4E6E81' },
        { code: '18-4222 TPG', name: 'Bluesteel', hex: '#35637C' },
        { code: '18-4023 TPG', name: 'Blue Ashes', hex: '#3B5F78' },
        { code: '19-4127 TPG', name: 'Midnight', hex: '#325B74' },
        { code: '18-4231 TPG', name: 'Blue Sapphire', hex: '#09577B' },
        { code: '19-4342 TPG', name: 'Seaport', hex: '#005E7D' },
        { code: '19-4241 TPG', name: 'Moroccan Blue', hex: '#0F4E67' },
        { code: '19-4535 TPG', name: 'Ocean Depths', hex: '#006175' },
        { code: '19-4526 TPG', name: 'Blue Coral', hex: '#1B5366' },
        { code: '19-4826 TPG', name: 'Dragonfly', hex: '#2A5C6A' },
        { code: '19-4916 TPG', name: 'Pacific', hex: '#1F595C' },
        { code: '19-4820 TPG', name: 'Balsam', hex: '#33565E' },
        { code: '19-4517 TPG', name: 'Mediterranea', hex: '#32575D' },
        { code: '19-4726 TPG', name: 'Atlantic Deep', hex: '#274E55' },
        { code: '15-4717 TPG', name: 'Aqua', hex: '#64A1AD' },
        { code: '16-4610 TPG', name: 'Stillwater', hex: '#70A4B0' },
        { code: '16-4519 TPG', name: 'Delphinium Blue', hex: '#6198AE' },
        { code: '17-4421 TPG', name: 'Larkspur', hex: '#3C7D90' },
        { code: '17-4716 TPG', name: 'Storm Blue', hex: '#47788A' },
        { code: '18-4417 TPG', name: 'Tapestry', hex: '#436573' },
        { code: '18-4522 TPG', name: 'Colonial Blue', hex: '#2D6471' },
        { code: '16-4728 TPG', name: 'Peacock Blue', hex: '#00A0B0' },
        { code: '17-4735 TPG', name: 'Capri Breeze', hex: '#008799' },
        { code: '17-4728 TPG', name: 'Algiers Blue', hex: '#00859C' },
        { code: '17-4730 TPG', name: 'Caneel Bay', hex: '#00849F' },
        { code: '18-4525 TPG', name: 'Caribbean Sea', hex: '#00819D' },
        { code: '18-4528 TPG', name: 'Mosaic Blue', hex: '#00758F' },
        { code: '18-4432 TPG', name: 'Turkish Tile', hex: '#00698B' },
        { code: '14-4814 TPG', name: 'Angel Blue', hex: '#83C5CD' },
        { code: '14-4816 TPG', name: 'Blue Radiance', hex: '#58C9D4' },
        { code: '15-4722 TPG', name: 'Capri', hex: '#44BBCA' },
        { code: '15-4825 TPG', name: 'Blue Curacao', hex: '#32BECC' },
        { code: '16-4725 TPG', name: 'Scuba Blue', hex: '#00ABC0' },
        { code: '16-4834 TPG', name: 'Bluebird', hex: '#009DAE' },
        { code: '18-4733 TPG', name: 'Enamel Blue', hex: '#007A8E' },
        { code: '15-5218 TPG', name: 'Pool Blue', hex: '#67BCB3' },
        { code: '15-5217 TPG', name: 'Blue Turquoise', hex: '#53B0AE' },
        { code: '16-5123 TPG', name: 'Baltic', hex: '#279D9F' },
        { code: '17-4928 TPG', name: 'Lake Blue', hex: '#008C96' },
        { code: '18-4735 TPG', name: 'Tile Blue', hex: '#008491' },
        { code: '17-4724 TPG', name: 'Pagoda Blue', hex: '#1A7F8E' },
        { code: '18-4726 TPG', name: 'Biscay Bay', hex: '#097988' },
        { code: '13-5313 TPG', name: 'Aruba Blue', hex: '#81D7D3' },
        { code: '16-5127 TPG', name: 'Ceramic', hex: '#00AAA9' },
        { code: '17-5126 TPG', name: 'Viridian Green', hex: '#009499' },
        { code: '18-4930 TPG', name: 'Tropical Green', hex: '#008786' },
        { code: '17-5025 TPG', name: 'Navigate', hex: '#008583' },
        { code: '17-5029 TPG', name: 'Deep Peacock Blue', hex: '#008381' },
        { code: '17-5034 TPG', name: 'Lapis', hex: '#008684' },
        { code: '15-5519 TPG', name: 'Turquoise', hex: '#45B5AA' },
        { code: '15-5516 TPG', name: 'Waterfall', hex: '#3AB0A2' },
        { code: '16-5418 TPG', name: 'Lagoon', hex: '#4D9E9A' },
        { code: '16-5422 TPG', name: 'Bright Aqua', hex: '#30A299' },
        { code: '17-5421 TPG', name: 'Porcelain Green', hex: '#108780' },
        { code: '18-5128 TPG', name: 'Blue Grass', hex: '#007C7A' },
        { code: '18-4936 TPG', name: 'Fanfare', hex: '#006D70' },
        { code: '15-5425 TPG', name: 'Atlantis', hex: '#00AF9F' },
        { code: '16-5425 TPG', name: 'Pool Green', hex: '#00AF9D' },
        { code: '17-5330 TPG', name: 'Dynasty Green', hex: '#008E80' },
        { code: '17-5335 TPG', name: 'Spectra Green', hex: '#009B8C' },
        { code: '17-5130 TPG', name: 'Columbia', hex: '#009288' },
        { code: '17-5024 TPG', name: 'Teal Blue', hex: '#007F7C' },
        { code: '18-5020 TPG', name: 'Parasailing', hex: '#00736C' },
        { code: '16-5109 TPG', name: 'Wasabi', hex: '#73A89E' },
        { code: '16-5515 TPG', name: 'Beryl Green', hex: '#619187' },
        { code: '17-5513 TPG', name: 'Deep Sea', hex: '#4F7C74' },
        { code: '17-5722 TPG', name: 'Bottle Green', hex: '#427D6D' },
        { code: '18-5725 TPG', name: 'Galapagos Green', hex: '#29685F' },
        { code: '18-5418 TPG', name: 'Antique Green', hex: '#29675C' },
        { code: '19-5217 TPG', name: 'Storm', hex: '#035453' },
        { code: '16-5721 TPG', name: 'Marine Green', hex: '#40A48E' },
        { code: '16-5421 TPG', name: 'Sea Green', hex: '#149C88' },
        { code: '17-5528 TPG', name: 'Greenlake', hex: '#007D69' },
        { code: '18-5619 TPG', name: 'Tidepool', hex: '#0A6F69' },
        { code: '18-5620 TPG', name: 'Ivy', hex: '#226C63' },
        { code: '18-5424 TPG', name: 'Cadmium Green', hex: '#00675B' },
        { code: '18-5322 TPG', name: 'Alpine Green', hex: '#005F56' },
        { code: '16-5112 TPG', name: 'Canton', hex: '#6DA29E' },
        { code: '16-5412 TPG', name: 'Agate Green', hex: '#599F99' },
        { code: '16-5119 TPG', name: 'Sea Blue', hex: '#549F98' },
        { code: '17-5122 TPG', name: 'Latigo Bay', hex: '#379190' },
        { code: '17-5117 TPG', name: 'Green Blue Slate', hex: '#358082' },
        { code: '18-5121 TPG', name: 'Bayou', hex: '#20706F' },
        { code: '18-5115 TPG', name: 'North Sea', hex: '#316C6B' },
        { code: '18-5618 TPG', name: 'Deep Jungle', hex: '#36716F' },
        { code: '19-5226 TPG', name: 'Everglade', hex: '#005B5D' },
        { code: '19-4922 TPG', name: 'Teal Green', hex: '#006361' },
        { code: '18-4728 TPG', name: 'Harbor Blue', hex: '#00656E' },
        { code: '18-4834 TPG', name: 'Deep Lake', hex: '#00656B' },
        { code: '19-4524 TPG', name: 'Shaded Spruce', hex: '#00585E' },
        { code: '19-4914 TPG', name: 'Deep Teal', hex: '#18454B' },
        { code: '18-5410 TPG', name: 'Silver Pine', hex: '#4E6866' },
        { code: '19-4818 TPG', name: 'Mallard Green', hex: '#405E5C' },
        { code: '19-5408 TPG', name: 'Bistro Green', hex: '#395551' },
        { code: '19-5413 TPG', name: 'Jasper', hex: '#335959' },
        { code: '18-5315 TPG', name: 'Bayberry', hex: '#255958' },
        { code: '19-5414 TPG', name: 'June Bug', hex: '#264A48' },
        { code: '19-5320 TPG', name: 'Ponderosa Pine', hex: '#203B3D' },
        { code: '12-5407 TPG', name: 'Aqua Glass', hex: '#D2E8E0' },
        { code: '12-5406 TPG', name: 'Opal Blue', hex: '#C3DDD6' },
        { code: '12-5506 TPG', name: 'Dusty Aqua', hex: '#C0DCCD' },
        { code: '14-5711 TPG', name: 'Ocean Wave', hex: '#8EC5B6' },
        { code: '14-5413 TPG', name: 'Holiday', hex: '#81C3B4' },
        { code: '14-5713 TPG', name: 'Cascade', hex: '#76C1B2' },
        { code: '15-5711 TPG', name: 'Dusty Jade Green', hex: '#7BB5A3' },
        { code: '12-5808 TPG', name: 'Honeydew', hex: '#BAE1D3' },
        { code: '13-6009 TPG', name: 'Brook Green', hex: '#AFDDCC' },
        { code: '13-5714 TPG', name: 'Cabbage', hex: '#87D7BE' },
        { code: '14-5714 TPG', name: 'Beveled Glass', hex: '#7ACCB8' },
        { code: '14-5718 TPG', name: 'Opal', hex: '#77CFB7' },
        { code: '15-5718 TPG', name: 'Biscay Green', hex: '#55C6A9' },
        { code: '15-5819 TPG', name: 'Spearmint', hex: '#64BFA4' },
        { code: '12-5408 TPG', name: 'Moonlight Jade', hex: '#C7E5DF' },
        { code: '12-5507 TPG', name: 'Bay', hex: '#BAE5D6' },
        { code: '13-5409 TPG', name: 'Yucca', hex: '#A1D7C9' },
        { code: '13-5412 TPG', name: 'Beach Glass', hex: '#96DFCE' },
        { code: '13-5414 TPG', name: 'Ice Green', hex: '#87D8C3' },
        { code: '14-5420 TPG', name: 'Cockatoo', hex: '#58C8B6' },
        { code: '15-5416 TPG', name: 'Florida Keys', hex: '#56BEAB' },
        { code: '14-5416 TPG', name: 'Bermuda', hex: '#60C9B3' },
        { code: '14-5721 TPG', name: 'Electric Green', hex: '#4BC3A8' },
        { code: '15-5421 TPG', name: 'Aqua Green', hex: '#00B89F' },
        { code: '16-5427 TPG', name: 'Billiard', hex: '#00AA92' },
        { code: '16-5533 TPG', name: 'Arcadia', hex: '#00A28A' },
        { code: '17-5430 TPG', name: 'Alhambra', hex: '#008778' },
        { code: '17-5633 TPG', name: 'Deep Green', hex: '#009276' },
        { code: '15-5728 TPG', name: 'Mint Leaf', hex: '#00B694' },
        { code: '16-5431 TPG', name: 'Peacock Green', hex: '#00A78B' },
        { code: '17-5638 TPG', name: 'Vivid Green', hex: '#009E82' },
        { code: '17-5641 TPG', name: 'Emerald', hex: '#009473' },
        { code: '17-5734 TPG', name: 'Viridis', hex: '#00846B' },
        { code: '18-5624 TPG', name: 'Shady Glade', hex: '#006E5B' },
        { code: '18-5338 TPG', name: 'Ultramarine Green', hex: '#006B54' },
        { code: '14-5706 TPG', name: 'Silt Green', hex: '#A9BDB1' },
        { code: '15-5706 TPG', name: 'Frosty Green', hex: '#A3B5A6' },
        { code: '16-5808 TPG', name: 'Iceberg Green', hex: '#8C9C92' },
        { code: '16-5907 TPG', name: 'Granite Green', hex: '#86A293' },
        { code: '16-5810 TPG', name: 'Green Bay', hex: '#7E9285' },
        { code: '16-5807 TPG', name: 'Lily Pad', hex: '#818F84' },
        { code: '17-6009 TPG', name: 'Laurel Wreath', hex: '#616F65' },
        { code: '16-5820 TPG', name: 'Green Spruce', hex: '#589F7E' },
        { code: '18-6216 TPG', name: 'Comfrey', hex: '#5B7961' },
        { code: '17-5912 TPG', name: 'Dark Ivy', hex: '#5B7763' },
        { code: '18-6018 TPG', name: 'Foliage Green', hex: '#3E6F58' },
        { code: '18-6114 TPG', name: 'Myrtle', hex: '#4F6B58' },
        { code: '18-5616 TPG', name: 'Posy Green', hex: '#325B51' },
        { code: '19-5920 TPG', name: 'Pineneedle', hex: '#334D41' },
        { code: '17-6212 TPG', name: 'Sea Spray', hex: '#717E6F' },
        { code: '18-6011 TPG', name: 'Duck Green', hex: '#53665C' },
        { code: '18-5622 TPG', name: 'Frosty Spruce', hex: '#578270' },
        { code: '18-5621 TPG', name: 'Fir', hex: '#3A725F' },
        { code: '19-5420 TPG', name: 'Evergreen', hex: '#11574A' },
        { code: '19-5511 TPG', name: 'Hunter Green', hex: '#335749' },
        { code: '19-5513 TPG', name: 'Dark Green', hex: '#314F40' },
        { code: '16-5815 TPG', name: 'Feldspar', hex: '#729B8B' },
        { code: '18-5718 TPG', name: 'Smoke Pine', hex: '#3E6257' },
        { code: '19-5411 TPG', name: 'Trekking Green', hex: '#355048' },
        { code: '18-5913 TPG', name: 'Garden Topiary', hex: '#3E524B' },
        { code: '19-5914 TPG', name: 'Jungle Green', hex: '#3C4E47' },
        { code: '19-5917 TPG', name: 'Sycamore', hex: '#35463D' },
        { code: '19-4906 TPG', name: 'Green Gables', hex: '#324241' },
        { code: '17-0613 TPG', name: 'Vetiver', hex: '#807D6F' },
        { code: '18-0312 TPG', name: 'Deep Lichen Green', hex: '#6E6E5C' },
        { code: '19-0309 TPG', name: 'Thyme', hex: '#50574C' },
        { code: '19-0417 TPG', name: 'Kombu Green', hex: '#3A4032' },
        { code: '19-6110 TPG', name: 'Deep Forest', hex: '#37413A' },
        { code: '19-0414 TPG', name: 'Forest Night', hex: '#434237' },
        { code: '19-0509 TPG', name: 'Rosin', hex: '#36362D' },
        { code: '13-6108 TPG', name: 'Celadon', hex: '#B8CCBA' },
        { code: '13-5305 TPG', name: 'Pale Aqua', hex: '#C1CCC2' },
        { code: '14-4505 TPG', name: 'Smoke', hex: '#BFC8C3' },
        { code: '13-4305 TPG', name: 'Foggy Dew', hex: '#D1D5D0' },
        { code: '14-4502 TPG', name: 'Mercury', hex: '#BAC2BA' },
        { code: '15-5704 TPG', name: 'Mineral Gray', hex: '#B2B6AC' },
        { code: '15-5205 TPG', name: 'Aqua Gray', hex: '#A5B2AA' },
        { code: '12-6206 TPG', name: 'Fairest Jade', hex: '#D8E3D7' },
        { code: '11-0304 TPG', name: 'Water Lily', hex: '#DDE3D5' },
        { code: '12-0108 TPG', name: 'Canary Green', hex: '#D6DEC9' },
        { code: '13-6006 TPG', name: 'Almost Aqua', hex: '#CAD3C1' },
        { code: '13-6106 TPG', name: 'Green Tint', hex: '#C5CCC0' },
        { code: '14-6007 TPG', name: 'Sea Foam', hex: '#B7C2B2' },
        { code: '16-0110 TPG', name: 'Desert Sage', hex: '#A7AE9E' },
        { code: '12-5404 TPG', name: 'Whisper Green', hex: '#E0E6D7' },
        { code: '13-6105 TPG', name: 'Celadon Tint', hex: '#CBCEBE' },
        { code: '13-0107 TPG', name: 'Dewkist', hex: '#C4D1C2' },
        { code: '13-6107 TPG', name: 'Green Lily', hex: '#C1CEC1' },
        { code: '14-6312 TPG', name: 'Cameo Green', hex: '#AAC0AD' },
        { code: '16-6008 TPG', name: 'Seagrass', hex: '#959889' },
        { code: '17-6206 TPG', name: 'Shadow', hex: '#888D82' },
        { code: '12-5504 TPG', name: 'Clearly Aqua', hex: '#CEE1D4' },
        { code: '13-6008 TPG', name: 'Misty Jade', hex: '#BCD9C8' },
        { code: '14-6008 TPG', name: 'Subtle Green', hex: '#B5CBBB' },
        { code: '14-5707 TPG', name: 'Aqua Foam', hex: '#ADC3B4' },
        { code: '13-5907 TPG', name: 'Gossamer Green', hex: '#B2CFBE' },
        { code: '15-5812 TPG', name: 'Lichen', hex: '#9BC2B1' },
        { code: '14-6011 TPG', name: 'Grayed Jade', hex: '#9BBEA9' },
        { code: '12-6205 TPG', name: 'Milky Green', hex: '#CFDBD1' },
        { code: '12-6208 TPG', name: 'Phantom Green', hex: '#DCE4D7' },
        { code: '13-6110 TPG', name: 'Mist Green', hex: '#AACEBC' },
        { code: '13-5911 TPG', name: 'Birds Egg Green', hex: '#AACCB9' },
        { code: '13-6208 TPG', name: 'Bok Choy', hex: '#BCCAB3' },
        { code: '15-6315 TPG', name: 'Smoke Green', hex: '#A8BBA2' },
        { code: '16-5917 TPG', name: 'Malachite Green', hex: '#709A89' },
        { code: '16-0220 TPG', name: 'Mistletoe', hex: '#8AA282' },
        { code: '16-6216 TPG', name: 'Basil', hex: '#879F84' },
        { code: '16-6318 TPG', name: 'Mineral Green', hex: '#7A9B78' },
        { code: '16-0224 TPG', name: 'Green Eyes', hex: '#7D956D' },
        { code: '17-0119 TPG', name: 'Turf Green', hex: '#6F8C69' },
        { code: '17-0220 TPG', name: 'Watercress', hex: '#748C69' },
        { code: '18-0121 TPG', name: 'Elm Green', hex: '#547053' },
        { code: '17-6323 TPG', name: 'Hedge Green', hex: '#768A75' },
        { code: '17-0210 TPG', name: 'Loden Frost', hex: '#788F74' },
        { code: '16-6116 TPG', name: 'Shale Green', hex: '#739072' },
        { code: '17-6319 TPG', name: 'Kashmir', hex: '#6F8D6A' },
        { code: '17-0123 TPG', name: 'Stone Green', hex: '#658E67' },
        { code: '18-0110 TPG', name: 'English Ivy', hex: '#61845B' },
        { code: '17-6219 TPG', name: 'Deep Grass Green', hex: '#558367' },
        { code: '17-0235 TPG', name: 'Piquant Green', hex: '#769358' },
        { code: '17-0230 TPG', name: 'Forest Green', hex: '#6B8D53' },
        { code: '17-0133 TPG', name: 'Fluorite Green', hex: '#699158' },
        { code: '18-0130 TPG', name: 'Cactus', hex: '#53713D' },
        { code: '19-0230 TPG', name: 'Garden Green', hex: '#495E35' },
        { code: '18-0125 TPG', name: 'Artichoke Green', hex: '#4B6D41' },
        { code: '18-0119 TPG', name: 'Willow Bough', hex: '#59754D' },
        { code: '17-0215 TPG', name: 'Aspen Green', hex: '#7E9B76' },
        { code: '17-6229 TPG', name: 'Medium Green', hex: '#3C824E' },
        { code: '18-6330 TPG', name: 'Juniper', hex: '#3D7245' },
        { code: '18-6320 TPG', name: 'Fairway', hex: '#477050' },
        { code: '18-0117 TPG', name: 'Vineyard Green', hex: '#5F7355' },
        { code: '18-0108 TPG', name: 'Dill', hex: '#6F7755' },
        { code: '19-6311 TPG', name: 'Greener Pastures', hex: '#37503D' },
        { code: '18-0420 TPG', name: 'Four Leaf Clover', hex: '#616652' },
        { code: '18-0317 TPG', name: 'Bronze Green', hex: '#525F48' },
        { code: '19-0323 TPG', name: 'Chive', hex: '#4A5335' },
        { code: '18-0322 TPG', name: 'Cypress', hex: '#545A3E' },
        { code: '19-0315 TPG', name: 'Black Forest', hex: '#414F3C' },
        { code: '19-0419 TPG', name: 'Rifle Green', hex: '#414832' },
        { code: '19-0415 TPG', name: 'Duffel Bag', hex: '#394034' },
        { code: '12-0109 TPG', name: 'Ambrosia', hex: '#D2E7CA' },
        { code: '13-6007 TPG', name: 'Spray', hex: '#BED3BB' },
        { code: '13-0116 TPG', name: 'Pastel Green', hex: '#B4D3B2' },
        { code: '15-6114 TPG', name: 'Hemlock', hex: '#97C1A1' },
        { code: '14-6316 TPG', name: 'Sprucestone', hex: '#9FC09C' },
        { code: '14-6319 TPG', name: 'Meadow', hex: '#8BBA94' },
        { code: '16-6324 TPG', name: 'Jadesheen', hex: '#77A276' },
        { code: '13-0117 TPG', name: 'Green Ash', hex: '#A0DAA9' },
        { code: '14-0127 TPG', name: 'Greengage', hex: '#8BC28C' },
        { code: '15-6120 TPG', name: 'Ming', hex: '#7CB08A' },
        { code: '14-6327 TPG', name: 'Zephyr Green', hex: '#7CB083' },
        { code: '14-6324 TPG', name: 'Peapod', hex: '#82B185' },
        { code: '15-6322 TPG', name: 'Light Grass Green', hex: '#7CB68E' },
        { code: '14-6329 TPG', name: 'Absinthe Green', hex: '#76B583' },
        { code: '14-6017 TPG', name: 'Neptune Green', hex: '#7FBB9E' },
        { code: '16-5919 TPG', name: 'Creme De Menthe', hex: '#70A38D' },
        { code: '16-5924 TPG', name: 'Winter Green', hex: '#4F9E81' },
        { code: '16-5825 TPG', name: 'Gumdrop Green', hex: '#2EA785' },
        { code: '16-5932 TPG', name: 'Holly Green', hex: '#0F9D76' },
        { code: '17-5735 TPG', name: 'Parakeet', hex: '#008C69' },
        { code: '18-5642 TPG', name: 'Golf Green', hex: '#008763' },
        { code: '14-6330 TPG', name: 'Spring Bud', hex: '#6BCD9C' },
        { code: '16-6030 TPG', name: 'Katydid', hex: '#66BC91' },
        { code: '15-6123 TPG', name: 'Jade Cream', hex: '#60B892' },
        { code: '16-5930 TPG', name: 'Ming Green', hex: '#3AA278' },
        { code: '16-6127 TPG', name: 'Greenbriar', hex: '#4B9B69' },
        { code: '18-6022 TPG', name: 'Leprechaun', hex: '#378661' },
        { code: '17-5923 TPG', name: 'Pine Green', hex: '#3A795E' },
        { code: '16-5942 TPG', name: 'Blarney', hex: '#00A776' },
        { code: '16-5938 TPG', name: 'Mint', hex: '#00A170' },
        { code: '17-5937 TPG', name: 'Deep Mint', hex: '#009E6D' },
        { code: '17-5936 TPG', name: 'Simply Green', hex: '#009B75' },
        { code: '18-5841 TPG', name: 'Pepper Green', hex: '#007D60' },
        { code: '18-5633 TPG', name: 'Bosphorus', hex: '#007558' },
        { code: '19-6026 TPG', name: 'Verdant Green', hex: '#12674A' },
        { code: '13-0111 TPG', name: 'Seacrest', hex: '#BFD1B3' },
        { code: '12-0317 TPG', name: 'Gleam', hex: '#BFD1AD' },
        { code: '14-0121 TPG', name: 'Nile Green', hex: '#A7C796' },
        { code: '15-6317 TPG', name: 'Quiet Green', hex: '#9EBC97' },
        { code: '15-6316 TPG', name: 'Fair Green', hex: '#92AF88' },
        { code: '15-6423 TPG', name: 'Forest Shade', hex: '#91AC80' },
        { code: '16-0228 TPG', name: 'Jade Green', hex: '#759465' },
        { code: '12-0225 TPG', name: 'Patina Green', hex: '#B9EAB3' },
        { code: '13-0221 TPG', name: 'Pistachio Green', hex: '#A9D39E' },
        { code: '14-0123 TPG', name: 'Arcadian Green', hex: '#A3C893' },
        { code: '15-6437 TPG', name: 'Grass Green', hex: '#7BB369' },
        { code: '15-6442 TPG', name: 'Bud Green', hex: '#79B465' },
        { code: '15-6428 TPG', name: 'Green Tea', hex: '#86A96F' },
        { code: '16-0123 TPG', name: 'Tendril', hex: '#89A06B' },
        { code: '13-0220 TPG', name: 'Paradise Green', hex: '#B2E79F' },
        { code: '14-0452 TPG', name: 'Lime Green', hex: '#9FC131' },
        { code: '15-0545 TPG', name: 'Jasmine Green', hex: '#7EC845' },
        { code: '15-0146 TPG', name: 'Green Flash', hex: '#79C753' },
        { code: '16-6340 TPG', name: 'Classic Green', hex: '#39A845' },
        { code: '17-0145 TPG', name: 'Online Lime', hex: '#44883C' },
        { code: '18-0135 TPG', name: 'Treetop', hex: '#476A30' },
        { code: '14-0156 TPG', name: 'Summer Green', hex: '#7ED37F' },
        { code: '14-6340 TPG', name: 'Spring Bouquet', hex: '#6DCE87' },
        { code: '16-6240 TPG', name: 'Island Green', hex: '#2BAE66' },
        { code: '15-6340 TPG', name: 'Irish Green', hex: '#45BE76' },
        { code: '15-6432 TPG', name: 'Shamrock', hex: '#6FA26B' },
        { code: '16-6329 TPG', name: 'Peppermint', hex: '#699E6D' },
        { code: '17-6333 TPG', name: 'Mint Green', hex: '#487D49' },
        { code: '16-6444 TPG', name: 'Poison Green', hex: '#4DB560' },
        { code: '16-6339 TPG', name: 'Vibrant Green', hex: '#55A860' },
        { code: '16-6138 TPG', name: 'Kelly Green', hex: '#339C5E' },
        { code: '15-5534 TPG', name: 'Bright Green', hex: '#009B5C' },
        { code: '17-6153 TPG', name: 'Fern Green', hex: '#008C45' },
        { code: '17-6030 TPG', name: 'Jelly Bean', hex: '#008658' },
        { code: '18-6024 TPG', name: 'Amazon', hex: '#1F7349' },
        { code: '13-0442 TPG', name: 'Green Glow', hex: '#B0C965' },
        { code: '14-0244 TPG', name: 'Bright Lime Green', hex: '#97BC62' },
        { code: '15-0343 TPG', name: 'Greenery', hex: '#88B04B' },
        { code: '16-0237 TPG', name: 'Foliage', hex: '#75A14F' },
        { code: '17-0336 TPG', name: 'Peridot', hex: '#819548' },
        { code: '16-0233 TPG', name: 'Meadow Green', hex: '#739957' },
        { code: '18-0538 TPG', name: 'Woodbine', hex: '#7B7F32' },
        { code: '14-0232 TPG', name: 'Jade Lime', hex: '#A1CA7B' },
        { code: '15-0336 TPG', name: 'Herbal Garden', hex: '#9CAD60' },
        { code: '15-0332 TPG', name: 'Leaf Green', hex: '#9FAF6C' },
        { code: '15-0341 TPG', name: 'Parrot Green', hex: '#8DB051' },
        { code: '16-0435 TPG', name: 'Dark Citron', hex: '#A0AC4F' },
        { code: '16-0230 TPG', name: 'Macaw Green', hex: '#9BB53E' },
        { code: '16-0235 TPG', name: 'Kiwi', hex: '#7AAB55' },
        { code: '13-0535 TPG', name: 'Sharp Green', hex: '#C6EC7A' },
        { code: '12-0435 TPG', name: 'Daiquiri Green', hex: '#C9D77E' },
        { code: '13-0540 TPG', name: 'Wild Lime', hex: '#C3D363' },
        { code: '15-0533 TPG', name: 'Linden Green', hex: '#C4BF71' },
        { code: '14-0445 TPG', name: 'Bright Chartreuse', hex: '#B5BF50' },
        { code: '14-0446 TPG', name: 'Tender Shoots', hex: '#B5CC39' },
        { code: '13-0550 TPG', name: 'Lime Punch', hex: '#C0D725' },
        { code: '12-0741 TPG', name: 'Sunny Lime', hex: '#DFEF87' },
        { code: '13-0645 TPG', name: 'Limeade', hex: '#D3D95F' },
        { code: '13-0650 TPG', name: 'Sulphur Spring', hex: '#D5D717' },
        { code: '15-0548 TPG', name: 'Citronelle', hex: '#B8AF23' },
        { code: '15-0543 TPG', name: 'Apple Green', hex: '#B5B644' },
        { code: '15-0646 TPG', name: 'Warm Olive', hex: '#C7B63C' },
        { code: '16-0840 TPG', name: 'Antique Moss', hex: '#B9A023' },
        { code: '12-0312 TPG', name: 'Lime Cream', hex: '#D7E8BC' },
        { code: '13-0319 TPG', name: 'Shadow Lime', hex: '#CFE09D' },
        { code: '13-0530 TPG', name: 'Lime Sherbet', hex: '#CDD78A' },
        { code: '13-0324 TPG', name: 'Lettuce Green', hex: '#BED38E' },
        { code: '13-0331 TPG', name: 'Sap Green', hex: '#AFCB80' },
        { code: '14-0226 TPG', name: 'Opaline Green', hex: '#A3C57D' },
        { code: '15-0523 TPG', name: 'Winter Pear', hex: '#B0B487' },
        { code: '11-0410 TPG', name: 'Sylvan Green', hex: '#E7EACB' },
        { code: '11-0205 TPG', name: 'Glass Green', hex: '#ECEAD0' },
        { code: '12-0607 TPG', name: 'Green Essence', hex: '#E9EAC8' },
        { code: '11-0609 TPG', name: 'Ethereal Green', hex: '#F1ECCA' },
        { code: '13-0614 TPG', name: 'Garden Glade', hex: '#DCD8A8' },
        { code: '12-0418 TPG', name: 'Hay', hex: '#D3CCA3' },
        { code: '13-0522 TPG', name: 'Pale Green', hex: '#CBCE91' },
        { code: '12-0521 TPG', name: 'Young Wheat', hex: '#E1E3A9' },
        { code: '12-0524 TPG', name: 'Citron', hex: '#DFDE9B' },
        { code: '12-0525 TPG', name: 'Luminary Green', hex: '#E3EAA5' },
        { code: '12-0520 TPG', name: 'Pale Lime Yellow', hex: '#DFE69F' },
        { code: '13-0633 TPG', name: 'Chardonnay', hex: '#E7DF99' },
        { code: '13-0333 TPG', name: 'Lima Bean', hex: '#E1D590' },
        { code: '12-0530 TPG', name: 'Charlock', hex: '#E5E790' },
        { code: '12-0426 TPG', name: 'Mellow Green', hex: '#D5D593' },
        { code: '14-0627 TPG', name: 'Shadow Green', hex: '#CFC486' },
        { code: '13-0532 TPG', name: 'Celery Green', hex: '#C5CC7B' },
        { code: '14-0434 TPG', name: 'Green Banana', hex: '#BABC72' },
        { code: '15-0538 TPG', name: 'Green Oasis', hex: '#B0B454' },
        { code: '15-0628 TPG', name: 'Leek Green', hex: '#B7B17A' },
        { code: '15-0525 TPG', name: 'Weeping Willow', hex: '#B3B17B' },
        { code: '15-0535 TPG', name: 'Palm', hex: '#AFAF5E' },
        { code: '16-0639 TPG', name: 'Golden Olive', hex: '#AF9841' },
        { code: '16-0540 TPG', name: 'Oasis', hex: '#A3A04E' },
        { code: '16-0532 TPG', name: 'Moss', hex: '#A09D59' },
        { code: '17-0840 TPG', name: 'Amber Green', hex: '#9A803A' },
        { code: '17-0836 TPG', name: 'Ecru Olive', hex: '#927B3C' },
        { code: '17-0636 TPG', name: 'Green Moss', hex: '#857946' },
        { code: '16-0726 TPG', name: 'Khaki', hex: '#A39264' },
        { code: '17-0929 TPG', name: 'Fennel Seed', hex: '#998456' },
        { code: '16-0632 TPG', name: 'Willow', hex: '#9A8B4F' },
        { code: '17-0843 TPG', name: 'Bronze Mist', hex: '#9C7E41' },
        { code: '18-0835 TPG', name: 'Dried Tobacco', hex: '#997B38' },
        { code: '18-0840 TPG', name: 'Tapenade', hex: '#805D24' },
        { code: '18-0832 TPG', name: 'Plantation', hex: '#7A6332' },
        { code: '13-0210 TPG', name: 'Fog Green', hex: '#C2CBB4' },
        { code: '13-0212 TPG', name: 'Tender Greens', hex: '#C5CFB6' },
        { code: '13-0608 TPG', name: 'Aloe Wash', hex: '#D0D3B7' },
        { code: '14-0114 TPG', name: 'Celadon Green', hex: '#B5C1A5' },
        { code: '15-6313 TPG', name: 'Laurel Green', hex: '#ADBBA1' },
        { code: '15-6310 TPG', name: 'Swamp', hex: '#A8B197' },
        { code: '15-6414 TPG', name: 'Reseda', hex: '#A1AD92' },
        { code: '12-0106 TPG', name: 'Meadow Mist', hex: '#D3DEC4' },
        { code: '12-0322 TPG', name: 'Butterfly', hex: '#CADEA5' },
        { code: '12-0315 TPG', name: 'White Jade', hex: '#D4DBB2' },
        { code: '12-0313 TPG', name: 'Seafoam Green', hex: '#CBD5B1' },
        { code: '13-0215 TPG', name: 'Reed', hex: '#C3D3A8' },
        { code: '14-0217 TPG', name: 'Seedling', hex: '#C0CBA1' },
        { code: '14-0115 TPG', name: 'Foam Green', hex: '#B4C79C' },
        { code: '13-0317 TPG', name: 'Lily Green', hex: '#C5CF98' },
        { code: '14-0425 TPG', name: 'Beechnut', hex: '#C2C18D' },
        { code: '14-0223 TPG', name: 'Nile', hex: '#B4BB85' },
        { code: '15-0531 TPG', name: 'Sweet Pea', hex: '#A3A969' },
        { code: '16-0439 TPG', name: 'Spinach Green', hex: '#909B4C' },
        { code: '16-0430 TPG', name: 'Fern', hex: '#9AA067' },
        { code: '17-0535 TPG', name: 'Green Olive', hex: '#8D8B55' },
        { code: '17-0324 TPG', name: 'Epsom', hex: '#849161' },
        { code: '18-0332 TPG', name: 'Grasshopper', hex: '#77824A' },
        { code: '17-0330 TPG', name: 'Turtle Green', hex: '#81894E' },
        { code: '18-0324 TPG', name: 'Calliste Green', hex: '#757A4E' },
        { code: '18-0435 TPG', name: 'Calla Green', hex: '#6A6F34' },
        { code: '18-0328 TPG', name: 'Cedar Green', hex: '#5E6737' },
        { code: '18-0228 TPG', name: 'Pesto', hex: '#595F34' },
        { code: '15-0326 TPG', name: 'Tarragon', hex: '#A4AE77' },
        { code: '16-0421 TPG', name: 'Sage', hex: '#91946E' },
        { code: '18-0525 TPG', name: 'Iguana', hex: '#818455' },
        { code: '17-0115 TPG', name: 'Oil Green', hex: '#80856D' },
        { code: '18-0422 TPG', name: 'Loden Green', hex: '#6E7153' },
        { code: '18-0426 TPG', name: 'Capulet Olive', hex: '#656344' },
        { code: '18-0316 TPG', name: 'Olivine', hex: '#666B54' },
        { code: '14-0216 TPG', name: 'Lint', hex: '#B6BA99' },
        { code: '15-0522 TPG', name: 'Pale Olive Green', hex: '#B5AD88' },
        { code: '15-0318 TPG', name: 'Sage Green', hex: '#B2AC88' },
        { code: '16-0518 TPG', name: 'Gray Green', hex: '#A49A79' },
        { code: '16-1118 TPG', name: 'Sponge', hex: '#A49775' },
        { code: '17-0618 TPG', name: 'Mermaid', hex: '#817A65' },
        { code: '17-0517 TPG', name: 'Dusky Green', hex: '#746C57' },
        { code: '16-0213 TPG', name: 'Tea', hex: '#999B85' },
        { code: '17-0510 TPG', name: 'Silver Sage', hex: '#938B78' },
        { code: '16-0713 TPG', name: 'Slate Green', hex: '#A0987C' },
        { code: '16-0613 TPG', name: 'Elm', hex: '#A39F86' },
        { code: '17-0525 TPG', name: 'Mosstone', hex: '#858961' },
        { code: '17-0620 TPG', name: 'Aloe', hex: '#817A60' },
        { code: '18-0622 TPG', name: 'Olive Drab', hex: '#756D47' },
        { code: '16-0526 TPG', name: 'Cedar', hex: '#928E64' },
        { code: '17-0625 TPG', name: 'Boa', hex: '#8E855F' },
        { code: '17-0627 TPG', name: 'Dried Herb', hex: '#847A59' },
        { code: '18-0527 TPG', name: 'Olive Branch', hex: '#646A45' },
        { code: '18-0629 TPG', name: 'Lizard', hex: '#71643E' },
        { code: '18-0430 TPG', name: 'Avocado', hex: '#676232' },
        { code: '18-0627 TPG', name: 'Fir Green', hex: '#67592A' },
        { code: '14-0418 TPG', name: 'Bog', hex: '#BAB696' },
        { code: '17-1019 TPG', name: 'Elmwood', hex: '#8C7C61' },
        { code: '18-0724 TPG', name: 'Gothic Olive', hex: '#7C6E4F' },
        { code: '18-0830 TPG', name: 'Butternut', hex: '#7A643F' },
        { code: '18-0825 TPG', name: 'Nutria', hex: '#75663E' },
        { code: '19-0622 TPG', name: 'Military Olive', hex: '#63563B' },
        { code: '19-0516 TPG', name: 'Dark Olive', hex: '#574D35' },
        { code: '15-6410 TPG', name: 'Moss Gray', hex: '#AFAB97' },
        { code: '14-6408 TPG', name: 'Abbey Stone', hex: '#ABA798' },
        { code: '18-0521 TPG', name: 'Burnt Olive', hex: '#646049' },
        { code: '18-0515 TPG', name: 'Dusty Olive', hex: '#646356' },
        { code: '19-0512 TPG', name: 'Ivy Green', hex: '#585442' },
        { code: '19-0515 TPG', name: 'Olive Night', hex: '#535040' },
        { code: '19-0511 TPG', name: 'Grape Leaf', hex: '#545144' },
        { code: '15-3800 TPG', name: 'Porpoise', hex: '#A7A19E' },
        { code: '16-3800 TPG', name: 'Satellite', hex: '#9F8D89' },
        { code: '18-1210 TPG', name: 'Driftwood', hex: '#847A75' },
        { code: '18-1304 TPG', name: 'Falcon', hex: '#6D625B' },
        { code: '19-0808 TPG', name: 'Morel', hex: '#685C53' },
        { code: '18-1108 TPG', name: 'Fallen Rock', hex: '#807669' },
        { code: '16-0205 TPG', name: 'Vintage Khaki', hex: '#9A9186' },
        { code: '16-1104 TPG', name: 'Crockery', hex: '#A49887' },
        { code: '16-1109 TPG', name: 'Greige', hex: '#928475' },
        { code: '17-1311 TPG', name: 'Desert Taupe', hex: '#8D7E71' },
        { code: '15-1307 TPG', name: 'White Pepper', hex: '#B6A893' },
        { code: '15-1304 TPG', name: 'Humus', hex: '#B7A793' },
        { code: '17-1316 TPG', name: 'Portabella', hex: '#937B6A' },
        { code: '18-1017 TPG', name: 'Caribou', hex: '#816D5E' },
        { code: '15-1114 TPG', name: 'Travertine', hex: '#AE997D' },
        { code: '16-1120 TPG', name: 'Starfish', hex: '#B09A77' },
        { code: '15-1218 TPG', name: 'Semolina', hex: '#CEB899' },
        { code: '16-0920 TPG', name: 'Curds And Whey', hex: '#BCA483' },
        { code: '17-1038 TPG', name: 'Tigers Eye', hex: '#977C61' },
        { code: '18-1029 TPG', name: 'Toasted Coconut', hex: '#8B6A4F' },
        { code: '19-0916 TPG', name: 'Rain Drum', hex: '#5F4C40' },
        { code: '11-0615 TPG', name: 'Pear Sorbet', hex: '#F3EAC3' },
        { code: '12-0718 TPG', name: 'Pineapple Slice', hex: '#E7D391' },
        { code: '12-0758 TPG', name: 'Yarrow', hex: '#FACE6D' },
        { code: '12-0717 TPG', name: 'Anise Flower', hex: '#F4E3B5' },
        { code: '11-0619 TPG', name: 'Flan', hex: '#F6E3B4' },
        { code: '12-0729 TPG', name: 'Sundress', hex: '#EBCF89' },
        { code: '12-0709 TPG', name: 'Macadamia', hex: '#E4CFB6' },
        { code: '12-0711 TPG', name: 'Lemon Meringue', hex: '#F6E199' },
        { code: '11-0622 TPG', name: 'Yellow Iris', hex: '#EEE78E' },
        { code: '12-0737 TPG', name: 'Goldfinch', hex: '#F8DC6C' },
        { code: '13-0756 TPG', name: 'Lemon Zest', hex: '#F9D857' },
        { code: '13-0759 TPG', name: 'Solar Power', hex: '#F4BF3A' },
        { code: '14-0851 TPG', name: 'Samoan Sun', hex: '#FBC85F' },
        { code: '16-1149 TPG', name: 'Desert Sun', hex: '#C87629' },
        { code: '18-1163 TPG', name: 'Pumpkin Spice', hex: '#A05C17' },
        { code: '16-1164 TPG', name: 'Orange Pepper', hex: '#DF7500' },
        { code: '17-1140 TPG', name: 'Marmalade', hex: '#C16512' },
        { code: '18-1249 TPG', name: 'Hawaiian Sunset', hex: '#BB5C14' },
        { code: '17-1342 TPG', name: 'Autumnal', hex: '#A15325' },
        { code: '18-1246 TPG', name: 'Umber', hex: '#944A1F' },
        { code: '17-1349 TPG', name: 'Exuberance', hex: '#E86800' },
        { code: '16-1363 TPG', name: 'Puffins Bill', hex: '#E95C20' },
        { code: '18-1148 TPG', name: 'Caramel Cafe', hex: '#864C24' },
        { code: '16-1449 TPG', name: 'Gold Flame', hex: '#B45422' },
        { code: '18-1345 TPG', name: 'Cinnamon Stick', hex: '#9B4722' },
        { code: '18-1340 TPG', name: 'Potters Clay', hex: '#9E4624' },
        { code: '18-1355 TPG', name: 'Rooibos Tea', hex: '#A23C26' },
        { code: '17-1360 TPG', name: 'Celosia Orange', hex: '#E8703A' },
        { code: '17-1461 TPG', name: 'Orangeade', hex: '#E2552C' },
        { code: '17-1449 TPG', name: 'Pureed Pumpkin', hex: '#C34121' },
        { code: '17-1463 TPG', name: 'Tangerine Tango', hex: '#DD4124' },
        { code: '18-1564 TPG', name: 'Poinciana', hex: '#CA3422' },
        { code: '17-1452 TPG', name: 'Koi', hex: '#D15837' },
        { code: '19-1662 TPG', name: 'Samba', hex: '#A2242F' },
        { code: '19-1757 TPG', name: 'Barbados Cherry', hex: '#AA0A27' },
        { code: '19-1758 TPG', name: 'Haute Red', hex: '#A11729' },
        { code: '18-1657 TPG', name: 'Salsa', hex: '#AA182B' },
        { code: '19-1559 TPG', name: 'Scarlet Sage', hex: '#9D202F' },
        { code: '19-1863 TPG', name: 'Scooter', hex: '#941E32' },
        { code: '19-1555 TPG', name: 'Red Dahlia', hex: '#7D2027' },
        { code: '19-1531 TPG', name: 'Sun Dried Tomato', hex: '#752329' },
        { code: '19-1337 TPG', name: 'Fired Brick', hex: '#6A2E2A' },
        { code: '19-1652 TPG', name: 'Rhubarb', hex: '#77202F' },
        { code: '19-1535 TPG', name: 'Syrah', hex: '#6A282C' },
        { code: '19-1930 TPG', name: 'Pomegranate', hex: '#6C2831' },
        { code: '19-1724 TPG', name: 'Cabernet', hex: '#64242E' },
        { code: '13-2807 TPG', name: 'Ballerina', hex: '#F2CFDC' },
        { code: '13-2802 TPG', name: 'Fairy Tale', hex: '#F2C1D1' },
        { code: '15-1506 TPG', name: 'Etherea', hex: '#A5958F' },
        { code: '16-1710 TPG', name: 'Foxglove', hex: '#B98391' },
        { code: '17-1609 TPG', name: 'Mesa Rose', hex: '#A66E7A' },
        { code: '18-1950 TPG', name: 'Jazzy', hex: '#B61C50' },
        { code: '19-2039 TPG', name: 'Granita', hex: '#A52350' },
        { code: '19-2041 TPG', name: 'Cherries Jubilee', hex: '#A22452' },
        { code: '18-2140 TPG', name: 'Cabaret', hex: '#CB3373' },
        { code: '19-2045 TPG', name: 'Vivacious', hex: '#A32857' },
        { code: '18-3628 TPG', name: 'Bellflower', hex: '#9469A2' },
        { code: '17-3617 TPG', name: 'English Lavendar', hex: '#9D7BB0' },
        { code: '16-3817 TPG', name: 'Rhapsody', hex: '#9F86AA' },
        { code: '19-3628 TPG', name: 'Acai', hex: '#46295A' },
        { code: '19-3638 TPG', name: 'Tillandsia Purple', hex: '#563474' },
        { code: '18-3635 TPG', name: 'Picasso Lily', hex: '#634878' },
        { code: '18-3620 TPG', name: 'Mystical', hex: '#5F4E72' },
        { code: '15-3908 TPG', name: 'Icelandic Blue', hex: '#A9ADC2' },
        { code: '15-3912 TPG', name: 'Aleutian', hex: '#9A9EB3' },
        { code: '17-3933 TPG', name: 'Silver Bullet', hex: '#81839A' },
        { code: '18-3933 TPG', name: 'Blue Granite', hex: '#717388' },
        { code: '19-3815 TPG', name: 'Evening Blue', hex: '#2A293E' },
        { code: '19-3713 TPG', name: 'Deep Well', hex: '#2C2A33' },
        { code: '19-3924 TPG', name: 'Night Sky', hex: '#2A2A35' },
        { code: '16-3921 TPG', name: 'Blue Heron', hex: '#96A3C7' },
        { code: '16-4030 TPG', name: 'Hydrangea', hex: '#849BCC' },
        { code: '14-3949 TPG', name: 'Xenon Blue', hex: '#B7C0D7' },
        { code: '16-3922 TPG', name: 'Brunnera Blue', hex: '#9BA9CA' },
        { code: '19-3922 TPG', name: 'Sky Captain', hex: '#262934' },
        { code: '19-3923 TPG', name: 'Navy Blazer', hex: '#282D3C' },
        { code: '19-4020 TPG', name: 'Dark Sapphire', hex: '#262B37' },
        { code: '13-4111 TPG', name: 'Plein Air', hex: '#BFCAD6' },
        { code: '13-3920 TPG', name: 'Halogen Blue', hex: '#BDC6DC' },
        { code: '15-4030 TPG', name: 'Chambray Blue', hex: '#9EB4D3' },
        { code: '15-3932 TPG', name: 'Bel Air Blue', hex: '#819AC1' },
        { code: '19-3929 TPG', name: 'Vintage Indigo', hex: '#4A556B' },
        { code: '19-3953 TPG', name: 'Sodalite Blue', hex: '#253668' },
        { code: '19-4022 TPG', name: 'Parisian Night', hex: '#323441' },
        { code: '19-3964 TPG', name: 'Monaco Blue', hex: '#274374' },
        { code: '18-4034 TPG', name: 'Vallarta Blue', hex: '#30658E' },
        { code: '19-4011 TPG', name: 'Salute', hex: '#282B34' },
        { code: '19-4009 TPG', name: 'Outer Space', hex: '#2F3441' },
        { code: '19-4021 TPG', name: 'Blueberry', hex: '#2C333E' },
        { code: '19-4012 TPG', name: 'Carbon', hex: '#272F38' },
        { code: '19-4218 TPG', name: 'Vulcan', hex: '#2D3036' },
        { code: '13-4200 TPG', name: 'Omphalodes', hex: '#B5CEDF' },
        { code: '14-4317 TPG', name: 'Cool Blue', hex: '#A5C5D9' },
        { code: '18-4028 TPG', name: 'Bering Sea', hex: '#4B5B6E' },
        { code: '19-4121 TPG', name: 'Blue Wing Teal', hex: '#2C4053' },
        { code: '19-4033 TPG', name: 'Poseidon', hex: '#123955' },
        { code: '18-4434 TPG', name: 'Mykonos Blue', hex: '#005780' },
        { code: '19-4326 TPG', name: 'Reflecting Pond', hex: '#203E4A' },
        { code: '14-4311 TPG', name: 'Corydalis Blue', hex: '#A9CADA' },
        { code: '14-4310 TPG', name: 'Blue Topaz', hex: '#78BDD4' },
        { code: '14-4511 TPG', name: 'Gulf Stream', hex: '#88C3D0' },
        { code: '15-4714 TPG', name: 'Aquarelle', hex: '#61AAB1' },
        { code: '14-4812 TPG', name: 'Aqua Splash', hex: '#85CED1' },
        { code: '19-5220 TPG', name: 'Botanical Garden', hex: '#12403C' },
        { code: '19-5350 TPG', name: 'Scarab', hex: '#23312D' },
        { code: '13-4108 TPG', name: 'Nimbus Cloud', hex: '#D5D5D8' },
        { code: '14-4105 TPG', name: 'Micro Chip', hex: '#BABCC0' },
        { code: '16-5101 TPG', name: 'Wet Weather', hex: '#929090' },
        { code: '17-4014 TPG', name: 'Titanium', hex: '#807D7F' },
        { code: '18-4016 TPG', name: 'December Sky', hex: '#767275' },
        { code: '19-3900 TPG', name: 'Pavement', hex: '#524D50' },
        { code: '19-3901 TPG', name: 'Magnet', hex: '#4D4B4F' },
        { code: '16-3850 TPG', name: 'Silver Sconce', hex: '#A19FA5' },
        { code: '17-3911 TPG', name: 'Silver Filigree', hex: '#7F7C81' },
        { code: '17-3907 TPG', name: 'Quicksilver', hex: '#7E7D88' },
        { code: '17-1503 TPG', name: 'Storm Front', hex: '#787376' },
        { code: '18-3907 TPG', name: 'Tornado', hex: '#5E5B60' },
        { code: '18-5210 TPG', name: 'Eiffel Tower', hex: '#5C5658' },
        { code: '19-3927 TPG', name: 'Graphite', hex: '#3B3B48' },
        { code: '16-3915 TPG', name: 'Alloy', hex: '#98979A' },
        { code: '16-3916 TPG', name: 'Sleet', hex: '#92949B' },
        { code: '15-4307 TPG', name: 'Tradewinds', hex: '#7F8793' },
        { code: '18-3912 TPG', name: 'Grisaille', hex: '#585E6F' },
        { code: '19-3918 TPG', name: 'Periscope', hex: '#46444C' },
        { code: '18-4006 TPG', name: 'Quiet Shade', hex: '#66676D' },
        { code: '19-4215 TPG', name: 'Turbulence', hex: '#4E545B' },
        { code: '18-4214 TPG', name: 'Stormy Weather', hex: '#58646D' },
        { code: '19-3910 TPG', name: 'Iron Gate', hex: '#4E5055' },
        { code: '19-3907 TPG', name: 'Forged Iron', hex: '#48464A' },
        { code: '19-0201 TPG', name: 'Asphalt', hex: '#434447' },
        { code: '16-4703 TPG', name: 'Ghost Gray', hex: '#9C9B98' },
        { code: '18-5102 TPG', name: 'Brushed Nickel', hex: '#73706F' },
        { code: '16-4400 TPG', name: 'Mourning Dove', hex: '#94908B' },
        { code: '15-4306 TPG', name: 'Belgian Block', hex: '#A3A9A6' },
        { code: '18-5806 TPG', name: 'Agave Green', hex: '#6B7169' },
        { code: '19-5621 TPG', name: 'Cilantro', hex: '#43544B' },
        { code: '19-5406 TPG', name: 'Pine Grove', hex: '#213631' },
        { code: '19-6050 TPG', name: 'Eden', hex: '#264E36' },
        { code: '18-6030 TPG', name: 'Jolly Green', hex: '#007844' },
        { code: '19-5918 TPG', name: 'Mountain View', hex: '#2E3D30' },
        { code: '14-0116 TPG', name: 'Margarita', hex: '#B5C38E' },
        { code: '18-0523 TPG', name: 'Winter Moss', hex: '#5B5A41' },
        { code: '19-0307 TPG', name: 'Climbing Ivy', hex: '#444940' },
        { code: '19-0840 TPG', name: 'Delicioso', hex: '#3F352F' },
        { code: '19-0910 TPG', name: 'Mulch', hex: '#433937' },
        { code: '19-1106 TPG', name: 'Mole', hex: '#392D2B' },
        { code: '19-1109 TPG', name: 'Chocolate Torte', hex: '#382E2D' },
        { code: '19-1018 TPG', name: 'Ganache', hex: '#34292A' },
        { code: '19-3909 TPG', name: 'Black Bean', hex: '#2E272A' },
        { code: '19-1103 TPG', name: 'Espresso', hex: '#363031' },
        { code: '19-4008 TPG', name: 'Meteorite', hex: '#2B2929' },
        { code: '19-4004 TPG', name: 'Tap Shoe', hex: '#2A2B2D' },
        { code: '11-1001 TPG', name: 'White Alyssum', hex: '#EFEBE7' },
        { code: '11-0605 TPG', name: 'Jet Stream', hex: '#EDE6DE' },
        { code: '11-0106 TPG', name: 'Sweet Cream', hex: '#F0EAD6' },
        { code: '11-0110 TPG', name: 'Buttercream', hex: '#EFE0CD' },
        { code: '11-0515 TPG', name: 'Lemon Icing', hex: '#F6EBC8' },
        { code: '11-0607 TPG', name: 'Sugar Swizzle', hex: '#F3EEE7' },
        { code: '11-0608 TPG', name: 'Coconut Milk', hex: '#F0EDE5' },
        { code: '11-0623 TPG', name: 'Yellow Pear', hex: '#ECE99B' },
        { code: '11-1302 TPG', name: 'Sea Salt', hex: '#F1E6DE' },
        { code: '11-4001 TPG', name: 'Brilliant White', hex: '#EDF1FE' },
        { code: '11-4302 TPG', name: 'Cannoli Cream', hex: '#F0EFE2' },
        { code: '11-4801 TPG', name: 'Tofu', hex: '#E8E3D9' },
        { code: '12-0110 TPG', name: 'Pistachio Shell', hex: '#D7CFBB' },
        { code: '12-0646 TPG', name: 'Celandine', hex: '#EBDF67' },
        { code: '12-0742 TPG', name: 'Lemon Verbena', hex: '#F3E779' },
        { code: '12-1110 TPG', name: 'Creme De Peche', hex: '#F5D6C6' },
        { code: '12-1813 TPG', name: 'Marys Rose', hex: '#F7D1D4' },
        { code: '12-2901 TPG', name: 'Morganite', hex: '#DFCDC6' },
        { code: '12-2907 TPG', name: 'Rose Water', hex: '#F8E0E7' },
        { code: '12-4301 TPG', name: 'Almond Milk', hex: '#D6CEBE' },
        { code: '13-0443 TPG', name: 'Lime Popsicle', hex: '#C0DB3A' },
        { code: '13-0644 TPG', name: 'Golden Kiwi', hex: '#F3DD3E' },
        { code: '13-0646 TPG', name: 'Meadowlark', hex: '#EAD94E' },
        { code: '13-0651 TPG', name: 'Evening Primrose', hex: '#CCDB1E' },
        { code: '13-0849 TPG', name: 'Habanero Gold', hex: '#FED450' },
        { code: '13-0851 TPG', name: 'Minion Yellow', hex: '#FED55D' },
        { code: '13-0919 TPG', name: 'Soybean', hex: '#D2C29D' },
        { code: '13-0946 TPG', name: 'Jurassic Gold', hex: '#E7AA56' },
        { code: '13-1105 TPG', name: 'Brown Rice', hex: '#C7BBA4' },
        { code: '13-1125 TPG', name: 'Peach Quartz', hex: '#F5B895' },
        { code: '13-1208 TPG', name: 'Peachy Keen', hex: '#E2BDB3' },
        { code: '13-1308 TPG', name: 'Brazilian Sand', hex: '#DACAB7' },
        { code: '13-1511 TPG', name: 'Pink Salt', hex: '#F7CDC7' },
        { code: '13-1520 TPG', name: 'Rose Quartz', hex: '#F7CAC9' },
        { code: '13-2808 TPG', name: 'Ballet Slipper', hex: '#EBCED5' },
        { code: '13-3207 TPG', name: 'Cherry Blossom', hex: '#F7CEE0' },
        { code: '13-4104 TPG', name: 'Antarctica', hex: '#C6C5C6' },
        { code: '13-4201 TPG', name: 'Oyster Mushroom', hex: '#C3C6C8' },
        { code: '13-4720 TPG', name: 'Tanager Turquoise', hex: '#91DCE8' },
        { code: '13-4810 TPG', name: 'Limpet Shell', hex: '#98DDDE' },
        { code: '13-5410 TPG', name: 'Iced Aqua', hex: '#ABD3DB' },
        { code: '14-0340 TPG', name: 'Acid Lime', hex: '#BADF30' },
        { code: '14-0952 TPG', name: 'Spicy Mustard', hex: '#D8AE47' },
        { code: '14-1052 TPG', name: 'Kumquat', hex: '#FBAA4C' },
        { code: '14-1208 TPG', name: 'Irish Cream', hex: '#C0AC92' },
        { code: '14-1241 TPG', name: 'Orange Chiffon', hex: '#F9AA7D' },
        { code: '14-1315 TPG', name: 'Hazelnut', hex: '#CFB095' },
        { code: '14-1803 TPG', name: 'Sepia Rose', hex: '#D4BAB6' },
        { code: '14-3906 TPG', name: 'Raindrops', hex: '#B1AAB3' },
        { code: '14-3912 TPG', name: 'Zen Blue', hex: '#9FA9BE' },
        { code: '14-4107 TPG', name: 'Quiet Gray', hex: '#B9BABD' },
        { code: '14-4122 TPG', name: 'Airy Blue', hex: '#92B6D5' },
        { code: '14-4202 TPG', name: 'Harbor Mist', hex: '#AFB1B4' },
        { code: '14-4315 TPG', name: 'Sea Angel', hex: '#98BFCA' },
        { code: '14-4320 TPG', name: 'Baltic Sea', hex: '#79B5DB' },
        { code: '14-4615 TPG', name: 'Antiqua Sand', hex: '#83C2CD' },
        { code: '14-4620 TPG', name: 'Island Paradise', hex: '#95DEE3' },
        { code: '14-4710 TPG', name: 'Tibetan Stone', hex: '#82C2C7' },
        { code: '15-0960 TPG', name: 'Mango Mojito', hex: '#D69C2F' },
        { code: '15-1020 TPG', name: 'Ginger Root', hex: '#BFA58A' },
        { code: '15-1040 TPG', name: 'Iced Coffee', hex: '#B18F6A' },
        { code: '15-1045 TPG', name: 'Autumn Blaze', hex: '#D9922E' },
        { code: '15-1051 TPG', name: 'Golden Orange', hex: '#D7942D' },
        { code: '15-1125 TPG', name: 'Porcini', hex: '#CCA580' },
        { code: '15-1151 TPG', name: 'Iceland Poppy', hex: '#F4963A' },
        { code: '15-1243 TPG', name: 'Papaya', hex: '#FEA166' },
        { code: '15-1262 TPG', name: 'Carrot Curl', hex: '#FE8C18' },
        { code: '15-1264 TPG', name: 'Turmeric', hex: '#FE840E' },
        { code: '15-1335 TPG', name: 'Tangelo', hex: '#FE7E03' },
        { code: '15-1425 TPG', name: 'Fenugreek', hex: '#C0916C' },
        { code: '15-1429 TPG', name: 'Dusted Clay', hex: '#CC7357' },
        { code: '15-1430 TPG', name: 'Pastry Shell', hex: '#BD8C66' },
        { code: '15-1520 TPG', name: 'Blooming Dahlia', hex: '#EB9687' },
        { code: '15-3520 TPG', name: 'Crocus Petal', hex: '#B99BC5' },
        { code: '15-3716 TPG', name: 'Purple Rose', hex: '#B09FCA' },
        { code: '15-3720 TPG', name: 'Lilac Breeze', hex: '#B3A0C9' },
        { code: '15-3919 TPG', name: 'Serenity', hex: '#91A8D0' },
        { code: '15-4428 TPG', name: 'Crystal Seas', hex: '#5DAFCE' },
        { code: '16-0543 TPG', name: 'Golden Lime', hex: '#9A9738' },
        { code: '16-0545 TPG', name: 'Split Pea', hex: '#9C9A40' },
        { code: '16-0550 TPG', name: 'Lentil Sprout', hex: '#ABA44D' },
        { code: '16-1103 TPG', name: 'Pure Cashmere', hex: '#ADA396' },
        { code: '16-1345 TPG', name: 'Sun Baked', hex: '#D27F63' },
        { code: '16-1347 TPG', name: 'Peach Caramel', hex: '#C5733D' },
        { code: '16-1348 TPG', name: 'Tomato Cream', hex: '#C57644' },
        { code: '16-1358 TPG', name: 'Orange Tiger', hex: '#F96714' },
        { code: '16-1438 TPG', name: 'Meerkat', hex: '#A46F44' },
        { code: '16-1453 TPG', name: 'Exotic Orange', hex: '#F96531' },
        { code: '16-1460 TPG', name: 'Dragon Fire', hex: '#FC642D' },
        { code: '16-1545 TPG', name: 'Coral Quartz', hex: '#F77464' },
        { code: '16-1548 TPG', name: 'Peach Echo', hex: '#F7786B' },
        { code: '16-1606 TPG', name: 'Purple Dove', hex: '#98878C' },
        { code: '16-3720 TPG', name: 'Sand Verbena', hex: '#9F90C1' },
        { code: '16-3905 TPG', name: 'Lilac Gray', hex: '#9896A4' },
        { code: '16-4033 TPG', name: 'Granada Sky', hex: '#5D81BB' },
        { code: '17-0630 TPG', name: 'Tree House', hex: '#988C75' },
        { code: '17-0949 TPG', name: 'Chai Tea', hex: '#B1832F' },
        { code: '17-1052 TPG', name: 'Roasted Pecan', hex: '#93592B' },
        { code: '17-1105 TPG', name: 'Roasted Cashew', hex: '#918579' },
        { code: '17-1108 TPG', name: 'Winter Twig', hex: '#948A7A' },
        { code: '17-1115 TPG', name: 'Petrified Oak', hex: '#8D7960' },
        { code: '17-1142 TPG', name: 'Argan Oil', hex: '#8B593E' },
        { code: '17-1145 TPG', name: 'Autumn Maple', hex: '#C46215' },
        { code: '17-1314 TPG', name: 'Sepia Tint', hex: '#897560' },
        { code: '17-1345 TPG', name: 'Spice Route', hex: '#B95B3F' },
        { code: '17-1361 TPG', name: 'Scarlet Ibis', hex: '#F45520' },
        { code: '17-1450 TPG', name: 'Summer Fig', hex: '#BE4B3B' },
        { code: '17-1708 TPG', name: 'Moonscape', hex: '#725F69' },
        { code: '17-1926 TPG', name: 'Fruit Dove', hex: '#CE5B78' },
        { code: '17-2034 TPG', name: 'Pink Yarrow', hex: '#CE3175' },
        { code: '17-2411 TPG', name: 'Toadstool', hex: '#988088' },
        { code: '17-3240 TPG', name: 'Bodacious', hex: '#B76BA3' },
        { code: '17-3520 TPG', name: 'Diffused Orchid', hex: '#9879A2' },
        { code: '17-3640 TPG', name: 'Fairy Wren', hex: '#9479AF' },
        { code: '17-3735 TPG', name: 'Sunlit Allium', hex: '#9787BB' },
        { code: '17-3914 TPG', name: 'Sharkskin', hex: '#838487' },
        { code: '17-3929 TPG', name: 'Pale Iris', hex: '#8895C5' },
        { code: '17-3940 TPG', name: 'Iolite', hex: '#707BB4' },
        { code: '17-4016 TPG', name: 'Gray Flannel', hex: '#848182' },
        { code: '17-4028 TPG', name: 'Riverside', hex: '#4C6A92' },
        { code: '17-4029 TPG', name: 'Quiet Harbor', hex: '#5A789A' },
        { code: '17-4032 TPG', name: 'Lichen Blue', hex: '#5D89B3' },
        { code: '17-4033 TPG', name: 'Pacific Coast', hex: '#5480AC' },
        { code: '17-4245 TPG', name: 'Ibiza Blue', hex: '#007CB7' },
        { code: '17-4429 TPG', name: 'Navagio Bay', hex: '#3183A0' },
        { code: '17-4530 TPG', name: 'Barrier Reef', hex: '#0084A1' },
        { code: '17-0530 TPG', name: 'Guacamole', hex: '#797B3A' },
        { code: '18-0107 TPG', name: 'Kale', hex: '#5A7247' },
        { code: '18-0220 TPG', name: 'Mayfly', hex: '#65663F' },
        { code: '18-0330 TPG', name: 'Twist Of Lime', hex: '#4E632C' },
        { code: '18-0625 TPG', name: 'Martini Olive', hex: '#716A4D' },
        { code: '18-1028 TPG', name: 'Emperador', hex: '#684832' },
        { code: '18-1049 TPG', name: 'Thai Curry', hex: '#AB6819' },
        { code: '18-1050 TPG', name: 'Honey Ginger', hex: '#A86217' },
        { code: '18-1155 TPG', name: 'Sugar Almond', hex: '#935529' },
        { code: '18-1325 TPG', name: 'Spiced Apple', hex: '#783937' },
        { code: '18-1440 TPG', name: 'Chili Oil', hex: '#8E3C36' },
        { code: '18-1506 TPG', name: 'Plum Truffle', hex: '#675657' },
        { code: '18-1541 TPG', name: 'Brandy Brown', hex: '#73362A' },
        { code: '18-1549 TPG', name: 'Valiant Poppy', hex: '#BC322C' },
        { code: '18-1551 TPG', name: 'Aura Orange', hex: '#B4262A' },
        { code: '18-1653 TPG', name: 'Toreador', hex: '#B61032' },
        { code: '18-1654 TPG', name: 'Lychee', hex: '#BA0B32' },
        { code: '18-1659 TPG', name: 'Goji Berry', hex: '#B91228' },
        { code: '18-1705 TPG', name: 'Arctic Dusk', hex: '#735B6A' },
        { code: '18-1708 TPG', name: 'Ephemera', hex: '#6F5965' },
        { code: '18-1759 TPG', name: 'Jalapeno Red', hex: '#B2103C' },
        { code: '18-1951 TPG', name: 'Love Potion', hex: '#C01352' },
        { code: '18-2045 TPG', name: 'Pink Peacock', hex: '#C62168' },
        { code: '18-3014 TPG', name: 'Grape Kiss', hex: '#7B4368' },
        { code: '18-3120 TPG', name: 'Willowherb', hex: '#8E4483' },
        { code: '18-3340 TPG', name: 'Charisma', hex: '#632A60' },
        { code: '18-3521 TPG', name: 'Plum Jam', hex: '#624076' },
        { code: '18-3530 TPG', name: 'Lavender Crystal', hex: '#936A98' },
        { code: '18-3540 TPG', name: 'Purple Sapphire', hex: '#6F4685' },
        { code: '18-3634 TPG', name: 'Chive Blossom', hex: '#7D5D99' },
        { code: '18-3839 TPG', name: 'Purple Corallite', hex: '#5A4E8F' },
        { code: '18-3908 TPG', name: 'Volcanic Glass', hex: '#615C60' },
        { code: '18-3917 TPG', name: 'Gray Blue', hex: '#4D587A' },
        { code: '18-3929 TPG', name: 'Blue Horizon', hex: '#4E6482' },
        { code: '18-3950 TPG', name: 'Iris Bloom', hex: '#5B609E' },
        { code: '18-4048 TPG', name: 'Nebulas Blue', hex: '#2D62A3' },
        { code: '18-4250 TPG', name: 'Indigo Bunting', hex: '#006CA9' },
        { code: '18-4430 TPG', name: 'Fjord Blue', hex: '#007290' },
        { code: '18-4538 TPG', name: 'Hawaiian Surf', hex: '#0078A7' },
        { code: '18-4630 TPG', name: 'Tahitian Tide', hex: '#006B7E' },
        { code: '18-5025 TPG', name: 'Quetzal Green', hex: '#006865' },
        { code: '18-5204 TPG', name: 'Granite Gray', hex: '#615E5F' },
        { code: '18-5845 TPG', name: 'Lush Meadow', hex: '#006E51' },
        { code: '19-0203 TPG', name: 'Gray Pinstripe', hex: '#49494D' },
        { code: '19-0403 TPG', name: 'Sea Turtle', hex: '#5E5749' },
        { code: '19-0413 TPG', name: 'Deep Depths', hex: '#46483C' },
        { code: '19-0510 TPG', name: 'Kalamata', hex: '#5F5B4C' },
        { code: '19-0823 TPG', name: 'Crocodile', hex: '#5D5348' },
        { code: '19-1110 TPG', name: 'Chocolate Plum', hex: '#3C2D2E' },
        { code: '19-1214 TPG', name: 'Chocolate Lab', hex: '#5C3E35' },
        { code: '19-1215 TPG', name: 'Shaved Chocolate', hex: '#543B35' },
        { code: '19-1224 TPG', name: 'Fondue Fudge', hex: '#5D4236' },
        { code: '19-1233 TPG', name: 'Tiramisu', hex: '#634235' },
        { code: '19-1234 TPG', name: 'Rocky Road', hex: '#5A3E36' },
        { code: '19-1419 TPG', name: 'Chicory Coffee', hex: '#4A342E' },
        { code: '19-1429 TPG', name: 'Smoked Paprika', hex: '#6E362C' },
        { code: '19-1432 TPG', name: 'Chocolate Fondant', hex: '#56352D' },
        { code: '19-1435 TPG', name: 'Cherry Mahogany', hex: '#66352B' },
        { code: '19-1534 TPG', name: 'Merlot', hex: '#72262C' },
        { code: '19-1536 TPG', name: 'Red Pear', hex: '#7B3539' },
        { code: '19-2420 TPG', name: 'Pickled Beet', hex: '#4D233D' },
        { code: '19-2429 TPG', name: 'Plum Caspia', hex: '#61224A' },
        { code: '19-2620 TPG', name: 'Winter Bloom', hex: '#47243B' },
        { code: '19-3425 TPG', name: 'Spiced Plum', hex: '#6D4773' },
        { code: '19-3750 TPG', name: 'Violet Indigo', hex: '#3E285C' },
        { code: '19-3831 TPG', name: 'Maritime Blue', hex: '#27293D' },
        { code: '19-3902 TPG', name: 'Obsidian', hex: '#3A363B' },
        { code: '19-3911 TPG', name: 'Black Beauty', hex: '#26262A' },
        { code: '19-3917 TPG', name: 'Blackened Pearl', hex: '#4D4B50' },
        { code: '19-3930 TPG', name: 'Odyssey Gray', hex: '#434452' },
        { code: '19-4003 TPG', name: 'Black Onyx', hex: '#2B272B' },
        { code: '19-4029 TPG', name: 'Navy Peony', hex: '#223A5E' },
        { code: '19-4031 TPG', name: 'Sargasso Sea', hex: '#35435A' },
        { code: '19-4034 TPG', name: 'Sailor Blue', hex: '#0E3A53' },
        { code: '19-4038 TPG', name: 'Gibraltar Sea', hex: '#123850' },
        { code: '19-4045 TPG', name: 'Lapis Blue', hex: '#004B8D' },
        { code: '19-4048 TPG', name: 'Baleine Blue', hex: '#155187' },
        { code: '19-4055 TPG', name: 'Galaxy Blue', hex: '#2A4B7C' },
        { code: '19-4120 TPG', name: 'Blue Opal', hex: '#0F3B57' },
        { code: '19-4122 TPG', name: 'Moonlit Ocean', hex: '#293B4D' },
        { code: '19-4126 TPG', name: 'Deep Dive', hex: '#29495C' },
        { code: '19-4536 TPG', name: 'Crystal Teal', hex: '#00637C' },
        { code: '19-4540 TPG', name: 'Deep Lagoon', hex: '#005265' },
        { code: '19-5030 TPG', name: 'Sea Moss', hex: '#254445' },
        { code: '19-5230 TPG', name: 'Forest Biome', hex: '#184A45' },
        { code: '19-5232 TPG', name: 'Rain Forest', hex: '#15463E' }
    ];

    // ── DOM refs ──
    const canvas            = document.getElementById('fabricCanvas');
    const ctx               = canvas.getContext('2d');
    const warpInput         = document.getElementById('warpColor');
    const weftInput         = document.getElementById('weftColor');
    const warpPantoneSearchBtn = document.getElementById('warpPantoneSearchBtn');
    const weftPantoneSearchBtn = document.getElementById('weftPantoneSearchBtn');
    const swapColorsBtn     = document.getElementById('swapColorsBtn');
    const gapSlider         = document.getElementById('gapSlider');
    const warpThickSlider   = document.getElementById('warpThickSlider');
    const weftThickSlider   = document.getElementById('weftThickSlider');
    const noiseSlider       = document.getElementById('noiseSlider');
    const saveSwatchBtn               = document.getElementById('saveSwatchBtn');
    const savedSwatchList             = document.getElementById('savedSwatchList');
    const swatchGroupFilter           = document.getElementById('swatchGroupFilter');
    const newSwatchGroupBtn           = document.getElementById('newSwatchGroupBtn');
    const manageSwatchGroupsBtn       = document.getElementById('manageSwatchGroupsBtn');
    const manageGroupsModal          = document.getElementById('manageGroupsModal');
    const manageGroupsModalBackdrop  = document.getElementById('manageGroupsModalBackdrop');
    const manageGroupsList           = document.getElementById('manageGroupsList');
    const manageGroupsModalClose     = document.getElementById('manageGroupsModalClose');
    const saveSwatchModal             = document.getElementById('saveSwatchModal');
    const saveSwatchModalBackdrop     = document.getElementById('saveSwatchModalBackdrop');
    const saveSwatchNameInput         = document.getElementById('saveSwatchNameInput');
    const saveSwatchModalGroupSelect  = document.getElementById('saveSwatchModalGroupSelect');
    const saveSwatchModalCancel       = document.getElementById('saveSwatchModalCancel');
    const saveSwatchModalConfirm      = document.getElementById('saveSwatchModalConfirm');
    const newGroupModal               = document.getElementById('newGroupModal');
    const newGroupModalBackdrop       = document.getElementById('newGroupModalBackdrop');
    const newGroupNameInput           = document.getElementById('newGroupNameInput');
    const newGroupModalCancel         = document.getElementById('newGroupModalCancel');
    const newGroupModalConfirm        = document.getElementById('newGroupModalConfirm');
    const editSwatchMetaModal         = document.getElementById('editSwatchMetaModal');
    const editSwatchMetaModalBackdrop = document.getElementById('editSwatchMetaModalBackdrop');
    const editSwatchMetaNameInput     = document.getElementById('editSwatchMetaNameInput');
    const editSwatchMetaGroupSelect   = document.getElementById('editSwatchMetaGroupSelect');
    const editSwatchMetaModalCancel   = document.getElementById('editSwatchMetaModalCancel');
    const editSwatchMetaModalConfirm  = document.getElementById('editSwatchMetaModalConfirm');

    let lastModalSaveGroup = '';
    let editSwatchMetaTargetId = null;

    // ── Pantone state ──
    let activeColorTarget  = null;   // 'warp' | 'weft'
    let currentWarpPantone = null;   // { code, name, hex } | null
    let currentWeftPantone = null;

    // ── Color utilities ──
    function hexToRgb(hex) {
        return {
            r: parseInt(hex.slice(1, 3), 16),
            g: parseInt(hex.slice(3, 5), 16),
            b: parseInt(hex.slice(5, 7), 16)
        };
    }

    function colorDistance(hex1, hex2) {
        const a = hexToRgb(hex1), b = hexToRgb(hex2);
        return Math.sqrt(
            Math.pow(a.r - b.r, 2) +
            Math.pow(a.g - b.g, 2) +
            Math.pow(a.b - b.b, 2)
        );
    }

    function findClosestPantone(hex) {
        let best = PANTONE_FHI[0], minDist = Infinity;
        for (const c of PANTONE_FHI) {
            const d = colorDistance(hex, c.hex);
            if (d < minDist) { minDist = d; best = c; }
        }
        return best;
    }

    // ── Pantone modal ──
    const pantoneModal      = document.getElementById('pantoneModal');
    const pantoneGrid       = document.getElementById('pantoneColorGrid');
    const pantoneSearch     = document.getElementById('pantoneSearchInput');
    const pantoneCount      = document.getElementById('pantoneResultCount');
    const pantoneTitle      = document.getElementById('pantoneModalTitle');
    const pantoneBackdrop   = document.getElementById('pantoneBackdrop');
    const pantoneSkipBtn    = document.getElementById('pantoneSkipBtn');

    function showPantoneModal(target) {
        activeColorTarget = target;
        const hex = target === 'warp' ? warpInput.value : weftInput.value;
        pantoneTitle.textContent = target === 'warp'
            ? '選擇經線 Pantone TPG 色票'
            : '選擇緯線 Pantone TPG 色票';
        pantoneSearch.value = '';
        pantoneModal.hidden = false;
        renderPantoneGrid(hex, '');
        setTimeout(function () {
            pantoneSearch.focus();
            const sel = pantoneGrid.querySelector('.is-closest');
            if (sel) sel.scrollIntoView({ block: 'center', behavior: 'smooth' });
        }, 50);
    }

    function hidePantoneModal() {
        pantoneModal.hidden = true;
        activeColorTarget = null;
    }

    function renderPantoneGrid(currentHex, filter) {
        pantoneGrid.innerHTML = '';
        const q = (filter || '').toLowerCase().trim();
        const list = q
            ? PANTONE_FHI.filter(function (c) {
                return c.name.toLowerCase().includes(q) || c.code.toLowerCase().includes(q);
              })
            : PANTONE_FHI;

        pantoneCount.textContent = list.length + ' 個色票';

        const closest = !q ? findClosestPantone(currentHex) : null;

        list.forEach(function (color) {
            const isClosest = color === closest;
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'pantone-color-btn' + (isClosest ? ' is-closest' : '');
            btn.setAttribute('role', 'option');
            btn.setAttribute('aria-selected', isClosest ? 'true' : 'false');
            btn.title = color.code + '\n' + color.name + '  ' + color.hex;

            const chip = document.createElement('span');
            chip.className = 'pantone-chip';
            chip.style.backgroundColor = color.hex;

            const info = document.createElement('span');
            info.className = 'pantone-info';

            const codeEl = document.createElement('span');
            codeEl.className = 'pantone-code';
            codeEl.textContent = color.code.replace(' TPG', ' TPG');

            const nameEl = document.createElement('span');
            nameEl.className = 'pantone-name';
            nameEl.textContent = color.name;

            info.appendChild(codeEl);
            info.appendChild(nameEl);
            btn.appendChild(chip);
            btn.appendChild(info);

            btn.addEventListener('click', function () {
                selectPantoneColor(color);
            });
            pantoneGrid.appendChild(btn);
        });
    }

    function selectPantoneColor(color) {
        if (activeColorTarget === 'warp') {
            warpInput.value = color.hex;
            currentWarpPantone = color;
        } else if (activeColorTarget === 'weft') {
            weftInput.value = color.hex;
            currentWeftPantone = color;
        }
        draw();
        hidePantoneModal();
    }

    function swapWarpWeftColors() {
        const prevWarpColor = warpInput.value;
        const prevWarpPantone = currentWarpPantone;
        warpInput.value = weftInput.value;
        weftInput.value = prevWarpColor;
        currentWarpPantone = currentWeftPantone;
        currentWeftPantone = prevWarpPantone;
        draw();
    }

    pantoneSearch.addEventListener('input', function () {
        const hex = activeColorTarget === 'warp' ? warpInput.value : weftInput.value;
        renderPantoneGrid(hex, this.value);
    });

    pantoneBackdrop.addEventListener('click', hidePantoneModal);
    pantoneSkipBtn.addEventListener('click', hidePantoneModal);
    pantoneModal.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') hidePantoneModal();
    });
    if (swapColorsBtn) {
        swapColorsBtn.addEventListener('click', swapWarpWeftColors);
    }

    // ── Core state ──
    function getState() {
        return {
            warp:         warpInput.value,
            warpPantone:  currentWarpPantone,
            weft:         weftInput.value,
            weftPantone:  currentWeftPantone,
            gap:          parseInt(gapSlider.value, 10),
            warpT:        parseInt(warpThickSlider.value, 10),
            weftT:        parseInt(weftThickSlider.value, 10),
            noise:        parseInt(noiseSlider.value, 10)
        };
    }

    function applyState(s) {
        warpInput.value           = s.warp;
        weftInput.value           = s.weft;
        gapSlider.value           = String(s.gap);
        warpThickSlider.value     = String(s.warpT);
        weftThickSlider.value     = String(s.weftT);
        noiseSlider.value         = String(s.noise);
        currentWarpPantone        = s.warpPantone || null;
        currentWeftPantone        = s.weftPantone || null;
        draw();
    }

    function renderPantoneLabelLine(el, pantone) {
        if (!el) return;
        el.textContent = '';
        if (!pantone) return;
        const name = (pantone.name && String(pantone.name).trim()) || '';
        if (name) {
            const nameSpan = document.createElement('span');
            nameSpan.className = 'pantone-name-part';
            nameSpan.textContent = name;
            el.appendChild(nameSpan);
            el.appendChild(document.createTextNode(' · '));
        }
        const codeSpan = document.createElement('span');
        codeSpan.className = 'pantone-code-part';
        codeSpan.textContent = 'PANTONE ' + pantone.code;
        el.appendChild(codeSpan);
    }

    function draw() {
        const gap           = parseInt(gapSlider.value, 10);
        const warpT         = parseInt(warpThickSlider.value, 10);
        const weftT         = parseInt(weftThickSlider.value, 10);
        const warpColor     = warpInput.value;
        const weftColor     = weftInput.value;
        const noiseIntensity = parseInt(noiseSlider.value, 10) / 100;

        document.getElementById('gapVal').innerText      = gap;
        document.getElementById('warpThickVal').innerText = warpT;
        document.getElementById('weftThickVal').innerText = weftT;
        document.getElementById('noiseVal').innerText    = Math.round(noiseIntensity * 100) + '%';
        document.getElementById('warpHex').innerText     = warpColor.toUpperCase();
        document.getElementById('weftHex').innerText     = weftColor.toUpperCase();

        const warpPantoneSpan = document.getElementById('warpPantoneCode');
        const weftPantoneSpan = document.getElementById('weftPantoneCode');
        renderPantoneLabelLine(warpPantoneSpan, currentWarpPantone);
        renderPantoneLabelLine(weftPantoneSpan, currentWeftPantone);

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.lineCap = 'butt';

        ctx.strokeStyle = weftColor;
        ctx.lineWidth   = weftT;
        for (let y = gap / 2; y < canvas.height; y += gap) {
            ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
        }

        ctx.strokeStyle = warpColor;
        ctx.lineWidth   = warpT;
        for (let x = gap / 2; x < canvas.width; x += gap) {
            ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
        }

        ctx.strokeStyle = weftColor;
        ctx.lineWidth   = weftT;
        for (let y = gap / 2, row = 0; y < canvas.height; y += gap, row++) {
            for (let x = gap / 2, col = 0; x < canvas.width; x += gap, col++) {
                if ((row + col) % 2 !== 0) {
                    ctx.beginPath();
                    ctx.moveTo(x - warpT / 2, y);
                    ctx.lineTo(x + warpT / 2, y);
                    ctx.stroke();
                }
            }
        }

        if (noiseIntensity > 0) {
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data      = imageData.data;
            for (let i = 0; i < data.length; i += 4) {
                if (data[i + 3] === 0) continue;
                const noise = (Math.random() - 0.5) * (noiseIntensity * 120);
                data[i]     += noise;
                data[i + 1] += noise;
                data[i + 2] += noise;
            }
            ctx.putImageData(imageData, 0, 0);
        }
    }

    function normalizeHexForColorInput(hex) {
        if (!hex || typeof hex !== 'string') return '#888888';
        let h = hex.trim();
        if (!h.startsWith('#')) h = '#' + h;
        if (h.length === 4) {
            h = '#' + h[1] + h[1] + h[2] + h[2] + h[3] + h[3];
        }
        if (h.length !== 7) return '#888888';
        return h.toLowerCase();
    }

    function applyWarpFromSwatchData(data) {
        warpInput.value = normalizeHexForColorInput(data.warp);
        currentWarpPantone = data.warpPantone ? Object.assign({}, data.warpPantone) : null;
        draw();
    }

    function applyWeftFromSwatchData(data) {
        weftInput.value = normalizeHexForColorInput(data.weft);
        currentWeftPantone = data.weftPantone ? Object.assign({}, data.weftPantone) : null;
        draw();
    }

    function makeThumbDataUrl() {
        const t    = document.createElement('canvas');
        const size = 100;
        t.width    = size;
        t.height   = size;
        const tctx = t.getContext('2d');
        tctx.imageSmoothingEnabled = true;
        tctx.drawImage(canvas, 0, 0, canvas.width, canvas.height, 0, 0, size, size);
        return t.toDataURL('image/png');
    }

    function makeThumbFromSwatch(s) {
        const size          = 100;
        const t             = document.createElement('canvas');
        t.width             = size;
        t.height            = size;
        const tctx          = t.getContext('2d');
        const gap           = s.gap;
        const warpT         = s.warpT;
        const weftT         = s.weftT;
        const warpColor     = s.warp;
        const weftColor     = s.weft;
        const noiseIntensity = s.noise / 100;
        tctx.lineCap = 'butt';
        tctx.strokeStyle = weftColor;
        tctx.lineWidth   = weftT;
        for (let y = gap / 2; y < size; y += gap) {
            tctx.beginPath(); tctx.moveTo(0, y); tctx.lineTo(size, y); tctx.stroke();
        }
        tctx.strokeStyle = warpColor;
        tctx.lineWidth   = warpT;
        for (let x = gap / 2; x < size; x += gap) {
            tctx.beginPath(); tctx.moveTo(x, 0); tctx.lineTo(x, size); tctx.stroke();
        }
        tctx.strokeStyle = weftColor;
        tctx.lineWidth   = weftT;
        for (let y = gap / 2, row = 0; y < size; y += gap, row++) {
            for (let x = gap / 2, col = 0; x < size; x += gap, col++) {
                if ((row + col) % 2 !== 0) {
                    tctx.beginPath();
                    tctx.moveTo(x - warpT / 2, y);
                    tctx.lineTo(x + warpT / 2, y);
                    tctx.stroke();
                }
            }
        }
        if (noiseIntensity > 0) {
            const imageData = tctx.getImageData(0, 0, size, size);
            const data      = imageData.data;
            for (let i = 0; i < data.length; i += 4) {
                if (data[i + 3] === 0) continue;
                const noise = (Math.random() - 0.5) * (noiseIntensity * 120);
                data[i]     += noise;
                data[i + 1] += noise;
                data[i + 2] += noise;
            }
            tctx.putImageData(imageData, 0, 0);
        }
        return t.toDataURL('image/png');
    }

    // ── Server-backed storage ──
    var _swatchCache    = DEFAULT_SWATCHES.map(function (s) { return Object.assign({}, s, { thumb: 'thumb/' + s.name + '.png' }); });
    var _groupCache     = DEFAULT_GROUPS.map(function (g) { return Object.assign({}, g); });
    var _lastModified   = 0;
    var _pollTimer      = null;

    function loadSwatches() { return _swatchCache.slice(); }
    function loadGroups()   { return _groupCache.slice(); }

    function saveSwatches(list) {
        _swatchCache = list.slice();
        fetch('/api/swatches', {
            method:  'PUT',
            headers: { 'Content-Type': 'application/json' },
            body:    JSON.stringify(list)
        }).catch(function (e) { console.error('saveSwatches:', e); });
    }

    function saveGroups(groups) {
        _groupCache = groups.slice();
        fetch('/api/groups', {
            method:  'PUT',
            headers: { 'Content-Type': 'application/json' },
            body:    JSON.stringify(groups)
        }).catch(function (e) { console.error('saveGroups:', e); });
    }

    function startPolling() {
        if (_pollTimer) return;
        _pollTimer = setInterval(function () {
            fetch('/api/data')
                .then(function (r) { return r.json(); })
                .then(function (data) {
                    if (data.lastModified > _lastModified) {
                        _lastModified = data.lastModified;
                        _swatchCache  = data.swatches;
                        _groupCache   = data.groups;
                        renderSavedList();
                        populateGroupSelects();
                    }
                })
                .catch(function () {});
        }, 15000);
    }

    function populateGroupSelects() {
        const groups = loadGroups();
        if (swatchGroupFilter) {
            const prev = swatchGroupFilter.value;
            swatchGroupFilter.innerHTML = '';
            const optAll = document.createElement('option');
            optAll.value = '';
            optAll.textContent = '全部';
            swatchGroupFilter.appendChild(optAll);
            const optUncat = document.createElement('option');
            optUncat.value = '__uncat__';
            optUncat.textContent = '未分類';
            swatchGroupFilter.appendChild(optUncat);
            groups.forEach(function (g) {
                const o = document.createElement('option');
                o.value = g.id;
                o.textContent = g.name;
                swatchGroupFilter.appendChild(o);
            });
            const ok = Array.prototype.some.call(swatchGroupFilter.options, function (opt) { return opt.value === prev; });
            swatchGroupFilter.value = ok ? prev : '';
        }
    }

    function populateModalSaveGroupSelect() {
        if (!saveSwatchModalGroupSelect) return;
        const groups = loadGroups();
        const prev = lastModalSaveGroup;
        saveSwatchModalGroupSelect.innerHTML = '';
        const o0 = document.createElement('option');
        o0.value = '';
        o0.textContent = '未分類';
        saveSwatchModalGroupSelect.appendChild(o0);
        groups.forEach(function (g) {
            const o = document.createElement('option');
            o.value = g.id;
            o.textContent = g.name;
            saveSwatchModalGroupSelect.appendChild(o);
        });
        const ok = prev && Array.prototype.some.call(saveSwatchModalGroupSelect.options, function (opt) { return opt.value === prev; });
        saveSwatchModalGroupSelect.value = ok ? prev : '';
    }

    function openSaveSwatchModal() {
        populateModalSaveGroupSelect();
        if (saveSwatchNameInput) saveSwatchNameInput.value = '';
        if (saveSwatchModal) {
            saveSwatchModal.hidden = false;
            setTimeout(function () {
                if (saveSwatchNameInput) saveSwatchNameInput.focus();
            }, 50);
        }
    }

    function closeSaveSwatchModal() {
        if (saveSwatchModal) saveSwatchModal.hidden = true;
    }

    function openNewGroupModal() {
        if (newGroupNameInput) newGroupNameInput.value = '';
        if (newGroupModal) {
            newGroupModal.hidden = false;
            setTimeout(function () {
                if (newGroupNameInput) newGroupNameInput.focus();
            }, 50);
        }
    }

    function closeNewGroupModal() {
        if (newGroupModal) newGroupModal.hidden = true;
    }

    function confirmNewGroupFromModal() {
        const raw = newGroupNameInput ? newGroupNameInput.value : '';
        const name = String(raw).trim();
        if (!name) {
            window.alert('請輸入群組名稱。');
            if (newGroupNameInput) newGroupNameInput.focus();
            return;
        }
        const glist = loadGroups();
        const gid = crypto.randomUUID ? crypto.randomUUID() : String(Date.now()) + Math.random();
        glist.push({ id: gid, name: name });
        saveGroups(glist);
        const saveOpen = saveSwatchModal && !saveSwatchModal.hidden;
        if (saveOpen) lastModalSaveGroup = gid;
        closeNewGroupModal();
        refreshAfterGroupChange();
    }

    function populateEditSwatchMetaGroupSelect(item) {
        if (!editSwatchMetaGroupSelect) return;
        const groups = loadGroups();
        editSwatchMetaGroupSelect.innerHTML = '';
        const oUncat = document.createElement('option');
        oUncat.value = '';
        oUncat.textContent = '未分類';
        editSwatchMetaGroupSelect.appendChild(oUncat);
        groups.forEach(function (g) {
            const o = document.createElement('option');
            o.value = g.id;
            o.textContent = g.name;
            editSwatchMetaGroupSelect.appendChild(o);
        });
        if (item.groupId && !groups.some(function (g) { return g.id === item.groupId; })) {
            const oOrphan = document.createElement('option');
            oOrphan.value = item.groupId;
            oOrphan.textContent = '（群組已不存在）';
            editSwatchMetaGroupSelect.appendChild(oOrphan);
        }
        editSwatchMetaGroupSelect.value = item.groupId || '';
    }

    function openEditSwatchMetaModal(item) {
        editSwatchMetaTargetId = item.id;
        if (editSwatchMetaNameInput) {
            editSwatchMetaNameInput.value = item.name || '';
        }
        populateEditSwatchMetaGroupSelect(item);
        if (editSwatchMetaModal) {
            editSwatchMetaModal.hidden = false;
            setTimeout(function () {
                if (editSwatchMetaNameInput) editSwatchMetaNameInput.focus();
            }, 50);
        }
    }

    function closeEditSwatchMetaModal() {
        editSwatchMetaTargetId = null;
        if (editSwatchMetaModal) editSwatchMetaModal.hidden = true;
    }

    function confirmEditSwatchMetaFromModal() {
        if (!editSwatchMetaTargetId) return;
        const found = _swatchCache.find(function (x) { return x.id === editSwatchMetaTargetId; });
        if (!found) {
            closeEditSwatchMetaModal();
            renderSavedList();
            return;
        }
        let name = editSwatchMetaNameInput ? String(editSwatchMetaNameInput.value).trim() : '';
        if (!name) name = '未命名';
        const gid = editSwatchMetaGroupSelect && editSwatchMetaGroupSelect.value
            ? editSwatchMetaGroupSelect.value
            : null;
        found.name    = name;
        found.groupId = gid || null;
        closeEditSwatchMetaModal();
        renderSavedList();
        fetch('/api/swatches/' + found.id, {
            method:  'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body:    JSON.stringify({ name: found.name, groupId: found.groupId })
        }).catch(function (e) { console.error('editSwatch:', e); });
    }

    function refreshAfterGroupChange() {
        populateGroupSelects();
        const saveOpen = saveSwatchModal && !saveSwatchModal.hidden;
        if (saveOpen) populateModalSaveGroupSelect();
        const mgOpen = manageGroupsModal && !manageGroupsModal.hidden;
        if (mgOpen) renderManageGroupsList();
        renderSavedList();
    }

    function renderManageGroupsList() {
        if (!manageGroupsList) return;
        const groups = loadGroups();
        manageGroupsList.innerHTML = '';
        if (groups.length === 0) {
            const p = document.createElement('p');
            p.className = 'manage-groups-empty';
            p.textContent = '尚無自訂分類，請先使用「新增群組」。';
            manageGroupsList.appendChild(p);
            return;
        }
        groups.forEach(function (g) {
            const row = document.createElement('div');
            row.className = 'manage-groups-row';

            const nameSpan = document.createElement('span');
            nameSpan.className = 'manage-groups-name';
            nameSpan.textContent = g.name;
            nameSpan.title = g.name;

            const btnRename = document.createElement('button');
            btnRename.type = 'button';
            btnRename.className = 'manage-groups-btn rename';
            btnRename.textContent = '更名';
            btnRename.addEventListener('click', function () {
                renameSwatchGroup(g.id);
            });

            const btnDel = document.createElement('button');
            btnDel.type = 'button';
            btnDel.className = 'manage-groups-btn delete';
            btnDel.textContent = '刪除';
            btnDel.addEventListener('click', function () {
                deleteSwatchGroup(g.id);
            });

            row.appendChild(nameSpan);
            row.appendChild(btnRename);
            row.appendChild(btnDel);
            manageGroupsList.appendChild(row);
        });
    }

    function openManageGroupsModal() {
        renderManageGroupsList();
        if (manageGroupsModal) manageGroupsModal.hidden = false;
    }

    function closeManageGroupsModal() {
        if (manageGroupsModal) manageGroupsModal.hidden = true;
    }

    function renameSwatchGroup(groupId) {
        const groups = loadGroups();
        const g = groups.find(function (x) { return x.id === groupId; });
        if (!g) return;
        const t = window.prompt('新的分類名稱', g.name);
        if (t === null) return;
        const name = String(t).trim();
        if (!name) {
            window.alert('名稱不可為空。');
            return;
        }
        g.name = name;
        saveGroups(groups);
        refreshAfterGroupChange();
    }

    function deleteSwatchGroup(groupId) {
        if (!window.confirm('確定刪除此分類？該分類內的色票將改為「未分類」。')) return;
        const groups = loadGroups().filter(function (x) { return x.id !== groupId; });
        saveGroups(groups);
        const swatches = loadSwatches().map(function (s) {
            if (s.groupId === groupId) {
                const next = Object.assign({}, s);
                next.groupId = null;
                return next;
            }
            return s;
        });
        saveSwatches(swatches);
        if (lastModalSaveGroup === groupId) lastModalSaveGroup = '';
        if (swatchGroupFilter && swatchGroupFilter.value === groupId) {
            swatchGroupFilter.value = '';
        }
        refreshAfterGroupChange();
    }

    function getSwatchGroupLabel(item, groups) {
        if (!item.groupId) return '未分類';
        const g = groups.find(function (x) { return x.id === item.groupId; });
        if (g) return g.name;
        return '（群組已不存在）';
    }

    // ── Swatch list rendering ──
    function renderSavedList() {
        const groups = loadGroups();
        const full   = loadSwatches();
        const filterVal = swatchGroupFilter ? swatchGroupFilter.value : '';
        let list     = full.slice();
        if (filterVal === '__uncat__') {
            list = list.filter(function (s) { return !s.groupId; });
        } else if (filterVal) {
            list = list.filter(function (s) { return s.groupId === filterVal; });
        }

        savedSwatchList.innerHTML = '';
        const hint = document.getElementById('swatchEmptyHint');
        if (hint) {
            if (full.length === 0) {
                hint.hidden = false;
                hint.textContent = '尚無儲存的色票';
            } else if (list.length === 0) {
                hint.hidden = false;
                hint.textContent = '此篩選條件下沒有色票';
            } else {
                hint.hidden = true;
            }
        }
        if (list.length === 0) return;

        list.forEach(function (item) {
            const li = document.createElement('li');
            li.className  = 'swatch-item';
            li.dataset.id = item.id;

            const img = document.createElement('img');
            img.src = item.thumb || '';
            img.alt = '';

            const meta    = document.createElement('div');
            meta.className = 'swatch-item-meta';

            const nameRow = document.createElement('div');
            nameRow.className = 'swatch-item-name-row';

            const nameEl  = document.createElement('div');
            nameEl.className  = 'swatch-item-name';
            nameEl.textContent = item.name || '未命名';

            const chips = document.createElement('div');
            chips.className = 'swatch-color-chips';

            const warpChip = document.createElement('span');
            warpChip.className = 'swatch-chip swatch-chip-warp';
            warpChip.setAttribute('role', 'button');
            warpChip.setAttribute('tabindex', '0');
            warpChip.setAttribute('aria-label', '將此色票的經線顏色套用到上方');
            if (item.warpPantone) {
                const warpCodeTitle = item.warpPantone.code.replace(/\s*TPG$/i, '') + ' TPG';
                const warpNameTitle = item.warpPantone.name || '未命名';
                warpChip.title = '經線: ' + warpNameTitle + ' (' + warpCodeTitle + ') — 點擊套用至上方案';
            } else {
                warpChip.title = '經線: 無 Pantone — 點擊套用至上方案';
            }
            warpChip.style.backgroundColor = item.warp || '#888888';
            warpChip.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                applyWarpFromSwatchData(item);
            });
            warpChip.addEventListener('keydown', function (e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    e.stopPropagation();
                    applyWarpFromSwatchData(item);
                }
            });

            const weftChip = document.createElement('span');
            weftChip.className = 'swatch-chip swatch-chip-weft';
            weftChip.setAttribute('role', 'button');
            weftChip.setAttribute('tabindex', '0');
            weftChip.setAttribute('aria-label', '將此色票的緯線顏色套用到上方');
            if (item.weftPantone) {
                const weftCodeTitle = item.weftPantone.code.replace(/\s*TPG$/i, '') + ' TPG';
                const weftNameTitle = item.weftPantone.name || '未命名';
                weftChip.title = '緯線: ' + weftNameTitle + ' (' + weftCodeTitle + ') — 點擊套用至上方案';
            } else {
                weftChip.title = '緯線: 無 Pantone — 點擊套用至上方案';
            }
            weftChip.style.backgroundColor = item.weft || '#888888';
            weftChip.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                applyWeftFromSwatchData(item);
            });
            weftChip.addEventListener('keydown', function (e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    e.stopPropagation();
                    applyWeftFromSwatchData(item);
                }
            });

            chips.appendChild(warpChip);
            chips.appendChild(weftChip);
            nameRow.appendChild(nameEl);
            nameRow.appendChild(chips);
            const inlinePantoneName = document.createElement('span');
            inlinePantoneName.className = 'swatch-inline-pantone-name';
            const warpPantoneCode = item.warpPantone && item.warpPantone.code
                ? item.warpPantone.code.replace(/\s*TPG$/i, '') + ' TPG'
                : '—';
            const weftPantoneCode = item.weftPantone && item.weftPantone.code
                ? item.weftPantone.code.replace(/\s*TPG$/i, '') + ' TPG'
                : '—';
            const wLabel = document.createElement('span');
            wLabel.className = 'swatch-inline-axis-label';
            wLabel.textContent = '經： ';
            const wCode = document.createElement('span');
            wCode.className = 'swatch-inline-code';
            wCode.textContent = warpPantoneCode;
            const sep = document.createElement('span');
            sep.className = 'swatch-inline-pantone-sep';
            sep.textContent = ' / ';
            const fLabel = document.createElement('span');
            fLabel.className = 'swatch-inline-axis-label';
            fLabel.textContent = '緯：';
            const fCode = document.createElement('span');
            fCode.className = 'swatch-inline-code';
            fCode.textContent = weftPantoneCode;
            inlinePantoneName.appendChild(wLabel);
            inlinePantoneName.appendChild(wCode);
            inlinePantoneName.appendChild(sep);
            inlinePantoneName.appendChild(fLabel);
            inlinePantoneName.appendChild(fCode);
            inlinePantoneName.title = '經線 / 緯線 Pantone 色名';

            meta.appendChild(nameRow);
            meta.appendChild(inlinePantoneName);

            const groupRow = document.createElement('div');
            groupRow.className = 'swatch-item-group-row';

            const groupDisplay = document.createElement('div');
            groupDisplay.className = 'swatch-item-group-display';

            const groupName = getSwatchGroupLabel(item, groups);
            const groupTitlePrefix = document.createElement('span');
            groupTitlePrefix.className = 'swatch-item-group-prefix';
            groupTitlePrefix.textContent = '分類：';

            const groupLabel = document.createElement('span');
            groupLabel.className = 'swatch-item-group-text';
            groupLabel.textContent = groupName;
            groupDisplay.setAttribute('title', '分類：' + groupName);

            const editGroupBtn = document.createElement('button');
            editGroupBtn.type = 'button';
            editGroupBtn.className = 'swatch-item-group-edit';
            editGroupBtn.setAttribute('aria-label', '編輯名稱與分類');
            editGroupBtn.title = '編輯色票名稱與分類';
            editGroupBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>';
            editGroupBtn.addEventListener('click', function (e) {
                e.stopPropagation();
                e.preventDefault();
                openEditSwatchMetaModal(item);
            });

            groupDisplay.appendChild(groupTitlePrefix);
            groupDisplay.appendChild(groupLabel);
            groupDisplay.appendChild(editGroupBtn);

            groupRow.appendChild(groupDisplay);
            meta.appendChild(groupRow);

            const actions  = document.createElement('div');
            actions.className = 'swatch-item-actions';

            const applyBtn = document.createElement('button');
            applyBtn.type        = 'button';
            applyBtn.textContent = '套用';
            applyBtn.addEventListener('click', function () { applyState(item); });

            const delBtn = document.createElement('button');
            delBtn.type        = 'button';
            delBtn.className   = 'btn-delete';
            delBtn.textContent = '刪除';
            delBtn.addEventListener('click', function () {
                _swatchCache = _swatchCache.filter(function (x) { return x.id !== item.id; });
                renderSavedList();
                fetch('/api/swatches/' + item.id, { method: 'DELETE' })
                    .catch(function (e) { console.error('delete swatch:', e); });
            });

            actions.appendChild(applyBtn);
            actions.appendChild(delBtn);

            li.appendChild(img);
            li.appendChild(meta);
            li.appendChild(actions);
            savedSwatchList.appendChild(li);
        });
    }

    function confirmSaveSwatchFromModal() {
        const nameRaw = saveSwatchNameInput ? saveSwatchNameInput.value : '';
        const gid = saveSwatchModalGroupSelect && saveSwatchModalGroupSelect.value ? saveSwatchModalGroupSelect.value : null;
        lastModalSaveGroup = gid || '';

        const state     = getState();
        const thumbData = makeThumbDataUrl();
        const entry = {
            id:          crypto.randomUUID ? crypto.randomUUID() : String(Date.now()) + Math.random(),
            name:        String(nameRaw).trim() || '色票 ' + new Date().toLocaleString('zh-TW', { month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' }),
            created:     Date.now(),
            thumb:       thumbData,
            groupId:     gid,
            warp:        state.warp,
            warpPantone: state.warpPantone,
            weft:        state.weft,
            weftPantone: state.weftPantone,
            gap:         state.gap,
            warpT:       state.warpT,
            weftT:       state.weftT,
            noise:       state.noise
        };

        closeSaveSwatchModal();

        fetch('/api/swatches', {
            method:  'POST',
            headers: { 'Content-Type': 'application/json' },
            body:    JSON.stringify(Object.assign({}, entry, { thumbData: thumbData }))
        })
            .then(function (r) { return r.json(); })
            .then(function (result) {
                entry.thumb = result.thumb || thumbData;
                _swatchCache.unshift(entry);
                _lastModified = Date.now();
                renderSavedList();
            })
            .catch(function (e) {
                console.error('confirmSaveSwatchFromModal:', e);
                _swatchCache.unshift(entry);
                renderSavedList();
            });
    }

    // ── Events ──
    // Sliders: live update
    [gapSlider, warpThickSlider, weftThickSlider, noiseSlider].forEach(function (el) {
        el.addEventListener('input', draw);
    });

    // Color inputs: live preview on drag, show Pantone picker on close
    warpInput.addEventListener('input', draw);
    warpInput.addEventListener('change', function () {
        currentWarpPantone = null;   // free-form pick clears previous Pantone
        draw();
        showPantoneModal('warp');
    });

    weftInput.addEventListener('input', draw);
    weftInput.addEventListener('change', function () {
        currentWeftPantone = null;
        draw();
        showPantoneModal('weft');
    });

    if (warpPantoneSearchBtn) {
        warpPantoneSearchBtn.addEventListener('click', function (e) {
            e.preventDefault();
            showPantoneModal('warp');
        });
    }
    if (weftPantoneSearchBtn) {
        weftPantoneSearchBtn.addEventListener('click', function (e) {
            e.preventDefault();
            showPantoneModal('weft');
        });
    }

    saveSwatchBtn.addEventListener('click', openSaveSwatchModal);

    if (saveSwatchModalBackdrop) {
        saveSwatchModalBackdrop.addEventListener('click', closeSaveSwatchModal);
    }
    if (saveSwatchModalCancel) {
        saveSwatchModalCancel.addEventListener('click', closeSaveSwatchModal);
    }
    if (saveSwatchModalConfirm) {
        saveSwatchModalConfirm.addEventListener('click', confirmSaveSwatchFromModal);
    }
    if (saveSwatchModal) {
        saveSwatchModal.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') closeSaveSwatchModal();
        });
    }
    if (saveSwatchNameInput) {
        saveSwatchNameInput.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                confirmSaveSwatchFromModal();
            }
        });
    }

    if (swatchGroupFilter) {
        swatchGroupFilter.addEventListener('change', renderSavedList);
    }

    if (newSwatchGroupBtn) {
        newSwatchGroupBtn.addEventListener('click', openNewGroupModal);
    }
    if (newGroupModalBackdrop) {
        newGroupModalBackdrop.addEventListener('click', closeNewGroupModal);
    }
    if (newGroupModalCancel) {
        newGroupModalCancel.addEventListener('click', closeNewGroupModal);
    }
    if (newGroupModalConfirm) {
        newGroupModalConfirm.addEventListener('click', confirmNewGroupFromModal);
    }
    if (newGroupModal) {
        newGroupModal.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') closeNewGroupModal();
        });
    }
    if (newGroupNameInput) {
        newGroupNameInput.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                confirmNewGroupFromModal();
            }
        });
    }

    if (editSwatchMetaModalBackdrop) {
        editSwatchMetaModalBackdrop.addEventListener('click', closeEditSwatchMetaModal);
    }
    if (editSwatchMetaModalCancel) {
        editSwatchMetaModalCancel.addEventListener('click', closeEditSwatchMetaModal);
    }
    if (editSwatchMetaModalConfirm) {
        editSwatchMetaModalConfirm.addEventListener('click', confirmEditSwatchMetaFromModal);
    }
    if (editSwatchMetaModal) {
        editSwatchMetaModal.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') closeEditSwatchMetaModal();
        });
    }
    if (editSwatchMetaNameInput) {
        editSwatchMetaNameInput.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                confirmEditSwatchMetaFromModal();
            }
        });
    }

    if (manageSwatchGroupsBtn) {
        manageSwatchGroupsBtn.addEventListener('click', openManageGroupsModal);
    }
    if (manageGroupsModalBackdrop) {
        manageGroupsModalBackdrop.addEventListener('click', closeManageGroupsModal);
    }
    if (manageGroupsModalClose) {
        manageGroupsModalClose.addEventListener('click', closeManageGroupsModal);
    }
    if (manageGroupsModal) {
        manageGroupsModal.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') closeManageGroupsModal();
        });
    }

    // ── Init ──
    draw();
    fetch('/api/data')
        .then(function (r) { return r.json(); })
        .then(function (data) {
            _swatchCache  = data.swatches;
            _groupCache   = data.groups;
            _lastModified = data.lastModified || Date.now();
            populateGroupSelects();
            renderSavedList();
            startPolling();
        })
        .catch(function () {
            // 伺服器未連線時使用預設值
            populateGroupSelects();
            renderSavedList();
        });
})();

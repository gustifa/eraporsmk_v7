(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{"5q/9":function(a,n,e){var s=e("nZ1j");"string"==typeof s&&(s=[[a.i,s,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(s,o);s.locals&&(a.exports=s.locals)},CgAZ:function(a,n,e){"use strict";e.r(n);e("ma9I"),e("TeQF"),e("07d7");var s=e("IF94"),o=e("YZfj"),r=e("AeMN"),t=e("Hrou"),l=e("C9gC"),i=e("okd0"),d=e("bPaI"),c=e("Ki4g"),u=e("CAmi"),w=e("oVt+"),p=e("sove"),b=e("GUe+"),m=e("giZP"),_=e("m10P"),g={components:{BCard:s.a,BCardBody:o.a,BSpinner:r.a,BTableSimple:t.a,BThead:l.a,BTbody:i.a,BTh:d.a,BTr:c.a,BTd:u.a,BRow:w.a,BCol:p.a,BButton:b.a,BFormGroup:m.a},data:function(){return{isBusy:!0,merdeka:!1,form:{aksi:"unduh-legger",user_id:"",guru_id:"",sekolah_id:"",semester_id:"",periode_aktif:"",pilihan:!1},rombongan_belajar_id:"",data_siswa:[],data_pembelajaran:[],legger_link:""}},created:function(){this.form.user_id=this.user.user_id,this.form.guru_id=this.user.guru_id,this.form.sekolah_id=this.user.sekolah_id,this.form.semester_id=this.user.semester.semester_id,this.form.periode_aktif=this.user.semester.nama,this.hasRole("pilihan")&&(this.form.pilihan=!0),this.loadPostsData(),_.a.$on("unduhLegger",this.handleEvent)},methods:{handleEvent:function(){if(this.rombongan_belajar_id){var a="/downloads/leger-nilai-pilihan/".concat(this.rombongan_belajar_id,"/").concat(this.form.sekolah_id,"/").concat(this.form.semester_id);window.open(a,"_blank").focus()}},loadPostsData:function(){var a=this;this.$http.post("/walas/unduh-legger",this.form).then((function(n){a.isBusy=!1;var e=n.data;e.rombel&&(a.rombongan_belajar_id=e.rombel.rombongan_belajar_id),a.data_siswa=e.data_siswa,a.data_pembelajaran=e.pembelajaran,a.merdeka=e.merdeka}))},getNilai:function(a,n){var e="-",s=a.filter((function(a){return a.anggota_rombel_id==n}));return s.length&&(e=s[0].nilai),e}}},h=(e("GrIF"),e("KHd+")),f=Object(h.a)(g,(function(){var a=this,n=a.$createElement,e=a._self._c||n;return e("b-card",{attrs:{"no-body":""}},[e("b-card-body",[a.isBusy?e("div",{staticClass:"text-center text-danger my-2"},[e("b-spinner",{staticClass:"align-middle"}),a._v(" "),e("strong",[a._v("Loading...")])],1):e("div",[e("b-table-simple",{attrs:{bordered:"",striped:"",responsive:""}},[e("b-thead",[e("b-tr",[e("b-th",{staticClass:"text-center"},[a._v("Nama Peserta Didik")]),a._v(" "),e("b-th",{staticClass:"text-center"},[a._v("NISN")]),a._v(" "),a._l(a.data_pembelajaran,(function(n,s){return[e("b-th",{staticClass:"text-center"},[a._v(a._s(n.nama_mata_pelajaran))])]}))],2)],1),a._v(" "),e("b-tbody",[a._l(a.data_siswa,(function(n,s){return[e("b-tr",[e("b-td",[a._v(a._s(n.nama))]),a._v(" "),e("b-td",{staticClass:"text-center"},[a._v(a._s(n.nisn))]),a._v(" "),a._l(a.data_pembelajaran,(function(s,o){return["1"==s.rombongan_belajar.jenis_rombel?[a.merdeka?e("b-td",{staticClass:"text-center"},[a._v(a._s(a.getNilai(s.all_nilai_akhir_kurmer,n.anggota_rombel.anggota_rombel_id)))]):e("b-td",{staticClass:"text-center"},[a._v(a._s(a.getNilai(s.all_nilai_akhir_pengetahuan,n.anggota_rombel.anggota_rombel_id)))])]:[e("b-td",{staticClass:"text-center"},[a._v(a._s(a.getNilai(s.all_nilai_akhir_kurmer,n.anggota_pilihan.anggota_rombel_id)))])]]}))],2)]}))],2)],1)],1)])],1)}),[],!1,null,null,null);n.default=f.exports},GrIF:function(a,n,e){"use strict";e("5q/9")},m10P:function(a,n,e){"use strict";var s=e("XuX8"),o=new(e.n(s).a);n.a=o},nZ1j:function(a,n,e){var s=e("JPst"),o=e("nm7J");(n=s(!1)).i(o),n.push([a.i,".swal2-container .swal2-popup {\n  border-radius: 0.428rem;\n  padding-bottom: 1.5rem;\n}\n.swal2-container .swal2-popup .swal2-close:focus {\n  outline: none;\n  box-shadow: none;\n}\n.swal2-container .swal2-popup .swal2-content {\n  color: #6e6b7b;\n}\n.swal2-container .swal2-popup .swal2-title {\n  font-size: 1.35rem;\n  font-weight: inherit;\n  color: #5e5873;\n}\n.swal2-container .swal2-popup button.swal2-confirm:focus {\n  box-shadow: none;\n}\n.swal2-container .swal2-popup input.swal2-input {\n  height: 2.714rem;\n  font-size: 0.9rem;\n  padding: 0.438rem 1rem;\n  color: #6e6b7b;\n  border-color: #d8d6de;\n  border-radius: 0.357rem;\n  line-height: 1.45;\n}\n.swal2-container .swal2-popup input.swal2-input:focus {\n  border-color: #7367f0 !important;\n  box-shadow: 0 3px 10px 0 rgba(34, 41, 47, 0.1);\n}\n.swal2-container .swal2-popup .swal2-select {\n  width: 100%;\n}\n.swal2-container .swal2-popup .swal2-progress-steps .swal2-progress-step {\n  background-color: #7367f0;\n}\n.swal2-container .swal2-popup .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step ~ .swal2-progress-step-line, .swal2-container .swal2-popup .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step ~ .swal2-progress-step {\n  background-color: #b3adf7;\n}\n.swal2-container .swal2-popup .swal2-progress-steps .swal2-progress-step-line {\n  background-color: #7367f0;\n}\n.swal2-container .swal2-popup pre {\n  min-height: 1.35rem;\n  margin-top: 0.5rem;\n}\n.swal2-container .swal2-popup .swal2-footer {\n  border-color: #ebe9f1;\n  color: #6e6b7b;\n}\n.dark-layout .swal2-container .swal2-popup .swal2-title {\n  color: #d0d2d6;\n}\n.dark-layout .swal2-container .swal2-modal {\n  background-color: #283046;\n}\n.dark-layout .swal2-container .swal2-modal .swal2-header .swal2-title {\n  color: #d0d2d6;\n}\n.dark-layout .swal2-container .swal2-modal .swal2-header .swal2-icon-text {\n  color: inherit;\n}\n.dark-layout .swal2-container .swal2-modal .swal2-header .swal2-success-circular-line-left, .dark-layout .swal2-container .swal2-modal .swal2-header .swal2-success-circular-line-right, .dark-layout .swal2-container .swal2-modal .swal2-header .swal2-success-fix, .dark-layout .swal2-container .swal2-modal .swal2-header .swal2-animate-success-icon {\n  background-color: #283046 !important;\n}\n.dark-layout .swal2-container .swal2-modal input.swal2-input {\n  border-color: #3b4253;\n  color: #b4b7bd;\n}\n.dark-layout .swal2-container .swal2-modal .swal2-content, .dark-layout .swal2-container .swal2-modal .swal2-html-container {\n  color: #b4b7bd;\n}\n.dark-layout .swal2-container .swal2-modal pre, .dark-layout .swal2-container .swal2-modal code {\n  color: #b4b7bd;\n}\n.dark-layout .swal2-container .swal2-modal .swal2-input {\n  background-color: #283046;\n}\n.dark-layout .swal2-container .swal2-modal .swal2-footer {\n  border-color: #3b4253;\n  color: #b4b7bd;\n}\n.dark-layout .swal2-container .swal2-validation-message {\n  background-color: #161d31;\n  color: #b4b7bd;\n}\nhtml[dir=rtl] .swal2-rtl .swal2-close {\n  left: 0;\n  right: auto;\n}",""]),a.exports=n}}]);
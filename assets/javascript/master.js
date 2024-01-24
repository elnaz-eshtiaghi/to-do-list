let mylist = document.getElementById('mylist')
        clone_li = ''
        const ltodo = () => {
            // ....input.....
            let lp = document.getElementById('inp')
            let _li = document.createElement('li')
            clone_li = _li
            let _btn = document.createElement('div')
            let lv = lp.value


            if ((lv == '') || (lv == ' ') || (lv == '/n') || (lv == null) || (lv.length < 3)) {
                alert('please input your text')
            }
            else {
                // .....li.....

                document.getElementById('btn').classList.remove('d-none')
                mylist.classList.remove("d-none")
                _li.style.listStyleType = 'none'
                _li.innerHTML =
                    `<input type= 'checkbox' onclick='_check(this)' class="col-1"/>
                <h6 class="col-8 "><strong class="">${lv}</strong></h6> 
                <button onclick='_edit(this)' class="col-1"><i class="bi bi-pencil"></i></button>
                <button onclick='_del(this)' class="col-1"><i class="bi bi-eraser "></i></button>`
                // ....add.....
                mylist.appendChild(_li)

                lp.value = null
                lp.focus()
            }

        }
        // .....check.....
        const _check = (x) => {
            // console.log(x.checked)
            if (x.checked) {
                x.nextElementSibling.style.color = '#e5e5e5'
                
            }
            else {
                x.nextElementSibling.style.color = '#fca2117c'

            }

        }
        // ......delet.....
        const _del = (y) => {
            y.parentElement.style.transform = 'translateX(-300px)'
            setTimeout(() => { y.parentElement.remove() }, 200);
        }
        // .....edit.....
        const _edit = (z) => {
            z.parentElement.contentEditable = 'true'
        }
        // .....clearall.....
        const _all = () => {
            document.getElementById('btn').classList.add('d-none')
            let _list = document.querySelectorAll('ul>li')
            _list.forEach((val) => {
                val.remove()
            })
        }
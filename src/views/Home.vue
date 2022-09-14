<template>
    <div class="books-box">
        <div class="books-box-search">
            <input type="text" v-model="bookName" />
            <input type="button" value="搜索" @click="searchBooks" />
        </div>
        <div class="books-container">
            <div class="card" v-for="item in bookList" :key="item.id">
                <div class="img-box">
                    <img :src="item.volumeInfo.imageLinks?.smallThumbnail" alt="image" />
                </div>
                <div class="details-box">
                    <div class="details">
                        <div class="title">{{item.volumeInfo.title}}</div>
                        <div class="content">
                            <div class="authors">{{checkType(item.volumeInfo.authors) === 'Array'?
                            item.volumeInfo.authors[0] : 'null'}}
                            <p>{{item.volumeInfo.publishedDate}}</p>
                            </div>
                            <div class="descrition">
                                {{item.volumeInfo?.description}}
                            </div>
                            <div class="more">
                                <el-button>
                                    <a :href="item.volumeInfo.previewLink" target="_blank">查看更多</a>
                                </el-button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { RouterView, RouterLink } from 'vue-router';
import { getBooks } from '@/api/request';
import { ref } from 'vue';
import type { BookObj } from '@/type/bookList'
import { checkType } from '@/utils/checkType'

const bookName = ref('')
const bookList = ref<BookObj[]>([])
const searchBooks = async () => {
    const res = await getBooks(bookName.value);
    bookList.value = res.data.items
    console.log(res.data);
    // console.log(bookList.value);

    bookList.value.forEach(x => {
        let res = checkType(x.volumeInfo.authors)
        console.log(res);

    })
}


</script>

<style scoped lang='less'>
.books-box {
    height: 100px;
    width: 80%;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    flex-direction: column;
    // border-bottom: 3px solid #fff;
    margin: 0 auto;

    .books-box-search {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 3rem;

        input {
            display: block;
            background: none;
            border: none;
            appearance: none;
            outline: none;
            background-color: aliceblue;

            &[type="text"] {
                height: 50px;
                width: 350px;
                font-size: 18px;
                border-radius: 20px;
                padding: 10px 16px;
            }

            &[type="button"] {
                height: 50px;
                width: 70px;
                border-radius: 20px;
                cursor: pointer;
                margin-left: 5px;
                font-size: 14px;
            }
        }
    }

    .books-container {
        height: 70vh;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-auto-flow: dense;
        gap: 20px 20px;

        // background-color: #fff;
        // padding: 50px;
        .card {
            // cursor: pointer;
            position: relative;
            width: 200px;
            height: 300px;
            // background-color: #fff;
            // border-radius: 20px;
            box-shadow: 0 35px 80px rgba(0, 0, 0, 0.3);

            // transition: 0.5s;
            .img-box {
                position: absolute;
                left: 50%;
                transform: translate(-50%);
                width: 100%;
                height: 100%;
                object-fit: cover;

                // background-color: aquamarine;

                img {
                    height: 100%;
                    width: 100%;
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                    transition: 0.5s linear;
                }

            }

            .details-box {
                position: absolute;
                height: 60px;
                border-radius: 10px;
                width: 85%;
                bottom: 20px;
                left: 50%;
                transform: translateX(-50%);
                // background-color: antiquewhite;
                background-color: #fff;
                transition: 0.5s;
                overflow: hidden;

                .details {
                    height: 100%;

                    .title {
                        font-size: 24px;
                        font-weight: 600;
                        height: 100%;text-align: center;
                    }

                    .content {
                        display: none;
                        transition: 0.5s;
                    }
                }
            }

            &:hover img {
                opacity: 0;
            }

            &:hover .details-box {
                width: 100%;
                height: 100%;
                bottom: 0;
                border-radius: 0;
                padding: 0 15px;
                .details {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;

                    .title {
                        height: 20%;
                        // text-align: left;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }

                    .content {
                        height: 75%;
                        display: block;
                        // margin-top: 5px;
                        .authors{
                            margin-bottom: 10px;
                        }
                        .descrition {
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 6;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            
                        }
                        .more{
                            position: absolute;
                            bottom: 10px;
                            left:50%;
                            transform: translateX(-50%);
                            a{
                                text-decoration: none;
                            }
                        }


                    }

                }


            }
        }

        // .card:hover{
        //     height: 400px;
        // }
    }

}
</style>
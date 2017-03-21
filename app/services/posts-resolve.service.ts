import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Observable } from "rxjs/Observable";

import { Post } from "../models/post";
import { PostService } from "./post.service";

@Injectable()
export class PostsResolve implements Resolve<Post[]> {

    constructor(private _postService: PostService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Post[]> {

        /*-----------------------------------------------------------------------------------------|
         | ~~~ Red Path ~~~                                                                        |
         |-----------------------------------------------------------------------------------------|
         | Modifica este Resolve para que, en caso de tener que obtener los posts correspondientes |
         | a un usuario, llame a la función 'getUserPosts()' del servicio PostService. Recuerda    |
         | mirar en los parámetros de la ruta, a ver qué encuentras.                               |
         |-----------------------------------------------------------------------------------------*/
        /*-----------------------------------------------------------------------------------------|
         | ~~~ Yellow Path ~~~                                                                     |
         |-----------------------------------------------------------------------------------------|
         | Modifica este Resolve para que, en caso de tener que obtener los posts correspondientes |
         | a una categoría, llame a la función 'getCategoryPosts()' del servicio PostService.      |
         | Recuerda mirar en los parámetros de la ruta, a ver qué encuentras.                      |
         |-----------------------------------------------------------------------------------------*/
        return route.params["userId"]
            ? this._postService.getUserPosts(+route.params["userId"])
            : route.params["categoryId"]
                ? this._postService.getCategoryPosts(+route.params["categoryId"])
                : this._postService.getPosts();


        // return route.params["userId"]
        //     ? this._postService.getUserPosts(+route.params["userId"])
        //     : route.params["categoryId"]
        //         ? this._postService.getCategoryPosts(+route.params["categoryId"])
        //         : route.params["query"]
        //             ? this._postService.searchPosts(route.params["query"])
        //             : this._postService.getPosts();
        // console.log(route);
        // debugger;
        //
        // if (route.params["userId"]) {
        //     return this._postService.getUserPosts(+route.params["userId"]);
        // }
        // else {
        //     if (route.params["categoryId"]) {
        //         return this._postService.getCategoryPosts(+route.params["categoryId"]);
        //     }
        //     else {
        //         return this._postService.getPosts();
        //     }
        // }

        // return this._postService.getPosts();
    }
}

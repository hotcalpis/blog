<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Models\Post;
use App\Http\Controllers\Controller;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::all();
        return $posts;
    }

    public function store(Request $request)
    {
        $post = new Post();
        $post->title = $request->title;
        $post->body = $request->body;;
        $post->save();

        return redirect('api/posts');
    }

    public function show($id)
    {
        $post = Post::find($id);

        return $post;
    }

    public function update(Request $request, $id)
    {
        $post = Post::find($id);
        $post->title = $request->title;
        $post->body = $request->body;
        $post->save();

        return redirect('api/posts/'.$id);
    }

    public function destroy($id)
    {
        $post = Post::find($id);
        $post->delete();

        return redirect('api/posts');
    }
}

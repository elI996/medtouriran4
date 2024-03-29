@extends('front.layout.front')

@section('title')
{{$single_post->getTranslatedAttribute('title')}} - {{setting(App::getLocale().'.title')}}
@endsection

@section('meta_desc')
 {{$single_post->getTranslatedAttribute('meta_description')}}
@endsection

@section('content')	
<!-- Start Page Title Section -->
<div class="page-ttl" style="background: url('{{Voyager::image($single_post->grand_background)}}')">
{{--    <div class="layer-stretch">--}}
        <div class="page-ttl-container">
            <h1>{{$single_post->getTranslatedAttribute('title')}}</h1>
{{--            <h1>@lang('home.blog')</h1>--}}
{{--            <p><a href="{{route('home')}}">@lang('home.home')</a> &#8594; <a href="{{route('blog.index')}}">@lang('home.blogs')</a> &#8594; <span>{{$single_post->getTranslatedAttribute('title')}}</span></p>--}}
        </div>
{{--    </div>--}}
</div><!-- End Page Title Section -->
<!-- Start Blog Section -->
<div class="layer-stretch">
    <div class="layer-wrapper">
        <div class="row">
            <div class="col-lg-8 text-center">
                <div class="theme-material-card">
{{--                    <div class="theme-img blog-picture">--}}
{{--                        <img  src="{{Helper::placeholder(Voyager::image($single_post->thumbnail('medium')))}}" alt="{{$single_post->getTranslatedAttribute('title')}}">--}}
{{--                    </div>--}}
                    <ul class="blog-detail">
{{--                        <li><i class="fa fa-user-o"></i>{{$single_post->authorId->name}}</li>--}}
                        <li><i class="fa fa-calendar-o"></i>{{$single_post->created_at->format('d M Y')}}</li>
                        <li><i class="fa fa-comment-o"></i>{{count($single_post->reviews)}}</li>
                    </ul>
                    <h3 class="font-weight-700 template-title">@lang('home.template_list')</h3>
{{--                    <p></p>--}}
                    {!! $single_post->getTranslatedAttribute('body') !!}
                    <div class="row blog-meta">
                        <div class="col-sm-7 blog-tag">
                            <p>@lang('home.tags') : </p>
                            <ul>
                                @foreach ($single_post->tags as $tag)
                                <li><a href="{{route('tag.show',[$tag,$tag->slug])}}">{{ucwords($tag->getTranslatedAttribute('title'))}}, </a></li>
                                @endforeach
                            </ul>
                        </div>
                        <div class="col-sm-5 text-right">
                            <ul class="social-list social-list-sm">
                                @include('front.common.social-networks')
                            </ul>
                        </div>
                    </div>
                </div>  
                @include('front.common.reviews',["reviews"=>$single_post->reviews])
                <form action="{{route('comment_store')}}" class="form-horizontal cform-2" method="post">
                @csrf
                <input type="hidden" value="{{get_class($single_post)}}" name="reviewable_type">
                <input type="hidden" value="{{$single_post->id}}" name="reviewable_id">
                @include('front.common.review-form')
                </form>
            </div>
            {!! ViewHelper::blog_sidebar() !!}
        </div>
    </div>
</div><!-- End Blog Section -->
<!-- Start Emergency Section -->

@endsection


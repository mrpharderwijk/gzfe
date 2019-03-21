import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleLoaderComponent } from './article-loader.component';

describe('ArticleLoaderComponent', () => {
  let component: ArticleLoaderComponent;
  let fixture: ComponentFixture<ArticleLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
